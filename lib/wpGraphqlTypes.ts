/** Tipos alinhados a `GET_GENERAL_SETTINGS` em `lib/wpQueries.ts`. */

export type WpGeneralSettingsQueryData = {
  allSettings?: {
    generalSettingsTitle?: string | null;
    generalSettingsDescription?: string | null;
  } | null;
};

/** Tipos alinhados a `GET_NAVBAR` em `lib/wpQueries.ts` (campo `data` da resposta Apollo). */

export type WpNavbarLinkFields = {
  label?: string | null;
  url?: string | null;
};

export type WpNavbarQueryData = {
  navbar?: {
    campos?: {
      links?: (WpNavbarLinkFields | null)[] | null;
      logo?: {
        node?: {
          filePath?: string | null;
        } | null;
      } | null;
      resume?: {
        label?: string | null;
        linkDownload?: string | null;
      } | null;
    } | null;
  } | null;
};

/** Tipos alinhados a `GET_HERO` em `lib/wpQueries.ts`. */

export type WpHeroQueryData = {
  hero?: {
    camposHero?: {
      descriptionHero?: string | null;
      headingH2?: string | null;
      backgroundHero?: {
        node?: {
          mediaItemUrl?: string | null;
        } | null;
      } | null;
    } | null;
  } | null;
};

/** Tipos alinhados a `GET_ABOUT_ME` em `lib/wpQueries.ts`. */
export type WpAboutMeQueryData = {
  aboutMe?: {
    camposAboutMe?: {
      titulo?: string | null;
      subtitulo?: string | null;
      descricao?: string | null;
    } | null;
  } | null;
};

/** Tipos alinhados a `GET_MY_EXPERTISES` em `lib/wpQueries.ts`. */
export type WpExpertiseSkillFields = {
  corDots?: string | null;
  descricao?: string | null;
  titulo?: string | null;
};

export type WpExpertisesQueryData = {
  myExpertises?: {
    camposExpertises?: {
      titulo?: string | null;
      descricao?: string | null;
      skills?: (WpExpertiseSkillFields | null)[] | null;
    } | null;
  } | null;
};

/** Tipos alinhados a `GET_PROJETOS` em `lib/wpQueries.ts`. */
export type WpProjetoNodeFields = {
  id?: string | null;
  title?: string | null;
  slug?: string | null;
  uri?: string | null;
  featuredImage?: {
    node?: {
      mediaItemUrl?: string | null;
    } | null;
  } | null;
  camposprojeto?: {
    pequenaDescricao?: string | null;
  } | null;
};

export type WpProjetosQueryData = {
  projetos?: {
    edges?: ({ node?: WpProjetoNodeFields | null } | null)[] | null;
  } | null;
};
