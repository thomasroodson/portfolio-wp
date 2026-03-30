// Em dev: mantenha comentado para usar ISR/cache da rota. Descomente para dados sempre frescos do WP.
// import { unstable_noStore as noStore } from "next/cache";
import { PortfolioPage } from "./PortfolioPage";
import type { AboutSectionProps } from "./components/Portfolio/AboutSection";
import type { ExpertiseSectionProps } from "./components/Portfolio/ExpertiseSection";
import type { HeroProps } from "./components/Portfolio/Hero";
import type { NavBarProps } from "./components/Portfolio/NavBar";
import { createApolloClient } from "../lib/apolloServer";
import type { ProjectCardProps } from "./components/Portfolio/ProjectCard";
import type {
  WpAboutMeQueryData,
  WpExpertiseSkillFields,
  WpExpertisesQueryData,
  WpHeroQueryData,
  WpNavbarLinkFields,
  WpNavbarQueryData,
  WpProjetosQueryData,
} from "../lib/wpGraphqlTypes";
import {
  GET_ABOUT_ME,
  GET_HERO,
  GET_MY_EXPERTISES,
  GET_NAVBAR,
  GET_PROJETOS,
} from "../lib/wpQueries";

export const revalidate = 2592000; // ISR mensal (com `noStore` desligado)

type IndexPageProps = {
  navBar: NavBarProps;
  hero: HeroProps;
  about: AboutSectionProps;
  expertise: ExpertiseSectionProps;
};

function resolveLogoSrc(rawLogoPath: string | null | undefined) {
  if (!rawLogoPath) return null;

  const apiBaseUrl =
    process.env.NEXT_PUBLIC_WP_API_BASE_URL ?? "https://api.thomasroodson.dev";

  if (rawLogoPath.startsWith("http")) return rawLogoPath;

  return `${apiBaseUrl}${rawLogoPath.startsWith("/") ? "" : "/"}${rawLogoPath}`;
}

function decodeHtmlEntities(input: string) {
  return input
    .replace(/&#(\d+);/g, (_, dec) => String.fromCodePoint(Number(dec)))
    .replace(/&#x([0-9a-fA-F]+);/g, (_, hex) =>
      String.fromCodePoint(Number.parseInt(hex, 16)),
    )
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

function htmlToPlainText(input: string | null | undefined) {
  if (!input) return "";

  const text = input
    .replace(/<br\s*\/?>\s*/gi, "\n")
    .replace(/<\/p>/gi, "\n\n")
    .replace(/<p[^>]*>/gi, "")
    .replace(/<[^>]+>/g, "");

  return decodeHtmlEntities(text).replace(/\n{2,}/g, "\n").trim();
}

function removeDeveloperBlock(input: string) {
  return input
    .replace(/^\s*const\s+developer\s*=\s*\{[\s\S]*?\};\s*/m, "")
    .trim();
}

const PLACEHOLDER_PROJECT_IMAGE =
  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=60";

function wpUriToProjectHref(uri: string | null | undefined): string | undefined {
  if (!uri) return undefined;
  const trimmed = uri.replace(/^\/+|\/+$/g, "");
  const segments = trimmed.split("/").filter(Boolean);
  const slug = segments[segments.length - 1];
  if (!slug) return undefined;
  return `/projects/${slug}`;
}

function mapProjetosToCards(
  data: WpProjetosQueryData | null | undefined,
  toPlain: (html: string | null | undefined) => string,
): ProjectCardProps[] {
  const edges = data?.projetos?.edges ?? [];
  const cards: ProjectCardProps[] = [];

  for (const edge of edges) {
    const node = edge?.node;
    if (!node?.title) continue;

    const rawUrl = node.featuredImage?.node?.mediaItemUrl?.trim();
    const imageUrl = rawUrl || PLACEHOLDER_PROJECT_IMAGE;

    const rawDesc = node.camposprojeto?.pequenaDescricao ?? "";
    const details = toPlain(rawDesc) || rawDesc.replace(/<[^>]+>/g, "").trim() || "—";

    const href = wpUriToProjectHref(node.uri);
    const card: ProjectCardProps = {
      imageUrl,
      title: String(node.title),
      details,
      ctaLabel: "Ver projeto",
    };
    if (href) card.href = href;
    cards.push(card);
  }

  return cards;
}

export default async function Page() {
  // noStore();

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

  let props: IndexPageProps = {
    navBar: defaultNav,
    hero: defaultHero,
    about: defaultAbout,
    expertise: defaultExpertise,
  };

  try {
    const client = createApolloClient();

    const [navbarResult, heroResult, aboutResult, expertiseResult, projetosResult] =
      await Promise.all([
        client.query({ query: GET_NAVBAR }),
        client.query({ query: GET_HERO }),
        client.query({ query: GET_ABOUT_ME }),
        client.query({ query: GET_MY_EXPERTISES }),
        client.query({ query: GET_PROJETOS }),
      ]);

    const navbarData = navbarResult.data as WpNavbarQueryData | null | undefined;
    const heroData = heroResult.data as WpHeroQueryData | null | undefined;
    const aboutData = aboutResult.data as WpAboutMeQueryData | null | undefined;
    const expertiseData =
      expertiseResult.data as WpExpertisesQueryData | null | undefined;
    const projetosData =
      projetosResult.data as WpProjetosQueryData | null | undefined;

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
    const descriptionText = removeDeveloperBlock(
      htmlToPlainText(aboutData?.aboutMe?.camposAboutMe?.descricao),
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
    />
  );
}

