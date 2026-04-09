// Em dev: use `unstable_noStore` (next/cache) se precisar sempre dados frescos do WP.
// Em produção: página estática; atualizações só via webhook (`revalidatePath` na API).
import type { Metadata } from "next";
import { PortfolioPage } from "./PortfolioPage";
import type { AboutSectionProps } from "./components/Portfolio/AboutSection";
import type { ExpertiseSectionProps } from "./components/Portfolio/ExpertiseSection";
import type { HeroProps } from "./components/Portfolio/Hero";
import type { FooterProps } from "./components/Portfolio/Footer";
import type { NavBarProps } from "./components/Portfolio/NavBar";
import { createApolloClient } from "../lib/apolloServer";
import { htmlToPlainText } from "../lib/htmlEntities";
import { mapProjetosToCards } from "../lib/wpProjectMapper";
import type {
  WpAboutMeQueryData,
  WpExpertiseSkillFields,
  WpExpertisesQueryData,
  WpGeneralSettingsQueryData,
  WpHeroQueryData,
  WpNavbarLinkFields,
  WpNavbarQueryData,
  WpProjetosQueryData,
} from "../lib/wpGraphqlTypes";
import {
  GET_ABOUT_ME,
  GET_GENERAL_SETTINGS,
  GET_HERO,
  GET_MY_EXPERTISES,
  GET_NAVBAR,
  GET_PROJETOS,
} from "../lib/wpQueries";

/** Só revalida quando o webhook chamar `revalidatePath` (sem intervalo de tempo). */
export const revalidate = false;

const HOME_METADATA_FALLBACK: Metadata = {
  title: "Thomas Roodson",
  description: "Desenvolvedor Web",
};

/** Title/description do WordPress (`allSettings`) apenas na rota `/`. */
export async function generateMetadata(): Promise<Metadata> {
  try {
    const client = createApolloClient();
    const { data } = await client.query<WpGeneralSettingsQueryData>({
      query: GET_GENERAL_SETTINGS,
    });

    const title = data?.allSettings?.generalSettingsTitle?.trim();
    const description = data?.allSettings?.generalSettingsDescription?.trim();

    if (!title && !description) {
      return HOME_METADATA_FALLBACK;
    }

    return {
      title: title || HOME_METADATA_FALLBACK.title,
      description: description || HOME_METADATA_FALLBACK.description,
    };
  } catch {
    return HOME_METADATA_FALLBACK;
  }
}

type IndexPageProps = {
  navBar: NavBarProps;
  hero: HeroProps;
  about: AboutSectionProps;
  expertise: ExpertiseSectionProps;
  footer: FooterProps;
};

function resolveLogoSrc(rawLogoPath: string | null | undefined) {
  if (!rawLogoPath) return null;

  const apiBaseUrl =
    process.env.NEXT_PUBLIC_WP_API_BASE_URL ?? "https://api.thomasroodson.dev";

  if (rawLogoPath.startsWith("http")) return rawLogoPath;

  return `${apiBaseUrl}${rawLogoPath.startsWith("/") ? "" : "/"}${rawLogoPath}`;
}

export default async function Page() {

  const defaultNav: NavBarProps = {
    links: [],
    logoSrc: null,
    resumeHref: "#",
    resumeLabel: "",
  };

  const defaultHero: HeroProps = {
    headingH2: null,
    descriptionHero: null,
    bgUrl: null,
  };

  const defaultAbout: AboutSectionProps = {
    title: "ABOUT ME",
    fileLabel: "AboutMe.js",
    descriptionText: "",
  };

  const defaultExpertise: ExpertiseSectionProps = {
    titulo: "My Expertise",
    descricao:
      "With a diverse skill set across multiple disciplines, I bring a unique perspective to every project.",
    skills: [],
  };

  const defaultFooter: FooterProps = {
    brandName: "Thomas Roodson",
    logoSrc: null,
    navLinks: [],
    copyright: `© ${new Date().getFullYear()} Portfolio. Todos os direitos reservados.`,
    facebookHref: "#",
    instagramHref: "#",
    githubHref: "#",
    linkedinHref: "#",
  };

  let props: IndexPageProps = {
    navBar: defaultNav,
    hero: defaultHero,
    about: defaultAbout,
    expertise: defaultExpertise,
    footer: defaultFooter,
  };

  try {
    const client = createApolloClient();

    const [
      navbarResult,
      heroResult,
      aboutResult,
      expertiseResult,
      projetosResult,
      settingsResult,
    ] = await Promise.all([
      client.query({ query: GET_NAVBAR }),
      client.query({ query: GET_HERO }),
      client.query({ query: GET_ABOUT_ME }),
      client.query({ query: GET_MY_EXPERTISES }),
      client.query({ query: GET_PROJETOS }),
      client.query<WpGeneralSettingsQueryData>({ query: GET_GENERAL_SETTINGS }),
    ]);

    const navbarData = navbarResult.data as WpNavbarQueryData | null | undefined;
    const heroData = heroResult.data as WpHeroQueryData | null | undefined;
    const aboutData = aboutResult.data as WpAboutMeQueryData | null | undefined;
    const expertiseData =
      expertiseResult.data as WpExpertisesQueryData | null | undefined;
    const projetosData =
      projetosResult.data as WpProjetosQueryData | null | undefined;
    const settingsData = settingsResult.data as WpGeneralSettingsQueryData | null | undefined;

    const rawLinks = navbarData?.navbar?.campos?.links ?? [];
    const links = rawLinks
      .filter(
        (l: WpNavbarLinkFields | null | undefined): l is WpNavbarLinkFields =>
          !!l?.label && !!l?.url,
      )
      .map((l) => ({ label: String(l.label), url: String(l.url) }));

    const logoSrc = resolveLogoSrc(
      navbarData?.navbar?.campos?.logo?.node?.filePath ?? null,
    );

    const resumeHref = navbarData?.navbar?.campos?.resume?.linkDownload ?? "#";
    const resumeLabel = navbarData?.navbar?.campos?.resume?.label ?? "";

    const headingH2 = heroData?.hero?.camposHero?.headingH2 ?? null;
    const descriptionHero = heroData?.hero?.camposHero?.descriptionHero ?? null;
    const bgUrl =
      heroData?.hero?.camposHero?.backgroundHero?.node?.mediaItemUrl ?? null;

    const title = aboutData?.aboutMe?.camposAboutMe?.titulo ?? null;
    const fileLabel = aboutData?.aboutMe?.camposAboutMe?.subtitulo ?? null;
    const descriptionText = htmlToPlainText(
      aboutData?.aboutMe?.camposAboutMe?.descricao,
    );

    const camposExpertises = expertiseData?.myExpertises?.camposExpertises;
    const expertiseDesc = htmlToPlainText(camposExpertises?.descricao);
    const rawExpertiseSkills = camposExpertises?.skills ?? [];
    const expertiseSkills: ExpertiseSectionProps["skills"] = rawExpertiseSkills
      .filter(
        (s: WpExpertiseSkillFields | null | undefined): s is WpExpertiseSkillFields =>
          !!s?.titulo,
      )
      .map((s) => ({
        titulo: String(s.titulo),
        descricao: htmlToPlainText(s.descricao),
        corDots: String(s.corDots ?? "").trim() || "#64748b",
      }));

    const projectCards = mapProjetosToCards(projetosData, htmlToPlainText);

    const brandName =
      settingsData?.allSettings?.generalSettingsTitle?.trim() || defaultFooter.brandName;

    props = {
      navBar: {
        links,
        logoSrc,
        resumeHref,
        resumeLabel,
      },
      hero: {
        headingH2: headingH2 ? String(headingH2) : null,
        descriptionHero: descriptionHero ? String(descriptionHero) : null,
        bgUrl: bgUrl ? String(bgUrl) : null,
      },
      about: {
        title: title ? String(title) : defaultAbout.title,
        fileLabel: fileLabel ? String(fileLabel) : defaultAbout.fileLabel,
        descriptionText: descriptionText || defaultAbout.descriptionText,
      },
      expertise: {
        titulo: camposExpertises?.titulo
          ? String(camposExpertises.titulo)
          : defaultExpertise.titulo,
        descricao: expertiseDesc || defaultExpertise.descricao,
        skills:
          expertiseSkills.length > 0 ? expertiseSkills : defaultExpertise.skills,
        ...(projectCards.length > 0 ? { projects: projectCards } : {}),
      },
      footer: {
        ...defaultFooter,
        brandName,
        logoSrc,
        navLinks: links,
      },
    };
  } catch (err) {
    // Mantém build/render estável caso o endpoint GraphQL esteja indisponível.
    console.error("app/page - GraphQL fetch failed:", err);
  }

  return (
    <PortfolioPage
      navBar={props.navBar}
      hero={props.hero}
      about={props.about}
      expertise={props.expertise}
      footer={props.footer}
    />
  );
}

