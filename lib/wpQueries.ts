import { gql } from "@apollo/client";

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
    projetos(first: 100) {
      edges {
        node {
          id
          title
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

// Scaffold (schema do WP GraphQL pode variar). Mantido com fallback no getStaticProps.
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

