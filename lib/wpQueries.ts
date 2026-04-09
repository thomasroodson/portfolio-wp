import { gql } from "@apollo/client";

export const GET_GENERAL_SETTINGS = gql`
  query getGeneralSettings {
    allSettings {
      generalSettingsTitle
      generalSettingsDescription
    }
  }
`;

export const GET_NAVBAR = gql`
  query getNavbar {
    navbar {
      campos {
        links {
          label
          url
        }
        logo {
          node {
            filePath
          }
        }
        resume {
          label
          linkDownload
        }
      }
    }
  }
`;

export const GET_HERO = gql`
  query getHero {
    hero {
      camposHero {
        descriptionHero
        headingH2
        backgroundHero {
          node {
            mediaItemUrl
          }
        }
      }
    }
  }
`;

export const GET_ABOUT_ME = gql`
  query getAboutMe {
    aboutMe {
      camposAboutMe {
        titulo
        subtitulo
        descricao
      }
    }
  }
`;

export const GET_MY_EXPERTISES = gql`
  query getMyExpertises {
    myExpertises {
      camposExpertises {
        titulo
        descricao
        skills {
          corDots
          descricao
          titulo
        }
      }
    }
  }
`;

export const GET_PROJETOS = gql`
  query getProjetos {
    projetos(
      first: 100
      where: { orderby: { field: DATE, order: DESC } }
    ) {
      edges {
        node {
          id
          title
          slug
          uri
          featuredImage {
            node {
              mediaItemUrl
            }
          }
          camposprojeto {
            pequenaDescricao
          }
        }
      }
    }
  }
`;

// Scaffold (schema do WP GraphQL pode variar). Usado em `app/projects/[slug]/page.tsx` (SSG + revalidate on-demand).
export const GET_PROJECT_BY_SLUG = gql`
  query getProjectBySlug($slug: String!) {
    postBy(slug: $slug) {
      databaseId
      slug
      title
      excerpt
      content
      featuredImage {
        node {
          sourceUrl
        }
      }
    }
  }
`;

