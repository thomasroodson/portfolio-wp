import { createApolloClient } from "../../../lib/apolloServer";
import { GET_PROJECT_BY_SLUG } from "../../../lib/wpQueries";

export const revalidate = 2592000; // ISR mensal
export const dynamicParams = true;

type WpProjectBySlugQueryData = {
  postBy?: {
    title?: string | null;
    excerpt?: string | null;
    content?: string | null;
    featuredImage?: {
      node?: {
        sourceUrl?: string | null;
      } | null;
    } | null;
  } | null;
};

export async function generateStaticParams() {
  // Equivalente ao `getStaticPaths` com `fallback: 'blocking'`:
  // não pré-gerar nada no build, mas permitir geração on-demand por slug.
  return [];
}

export default async function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const slug = String(params?.slug ?? "");

  let project: {
    title: string;
    excerpt?: string | null;
    content?: string | null;
    featuredImageUrl?: string | null;
  } | null = null;

  try {
    const client = createApolloClient();
    const result = await client.query({
      query: GET_PROJECT_BY_SLUG,
      variables: { slug },
    });

    const postBy =
      (result.data as WpProjectBySlugQueryData | undefined)?.postBy ?? null;
    const featuredImageUrl = postBy?.featuredImage?.node?.sourceUrl ?? null;

    project = postBy
      ? {
          title: String(postBy.title ?? slug),
          excerpt: postBy.excerpt ?? null,
          content: postBy.content ?? null,
          featuredImageUrl,
        }
      : null;
  } catch (err) {
    console.error("app/projects/[slug] - GraphQL fetch failed:", err);
    project = null;
  }

  return (
    <main style={{ padding: 24, maxWidth: 980, margin: "0 auto" }}>
      <h1 style={{ margin: 0, marginBottom: 16, fontSize: 32 }}>
        Project: {slug}
      </h1>

      {project ? (
        <>
          <p style={{ opacity: 0.85, marginTop: 8, marginBottom: 12 }}>
            {project.title}
          </p>

          {project.featuredImageUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={project.featuredImageUrl}
              alt={project.title}
              style={{ width: "100%", height: "auto", borderRadius: 12 }}
            />
          ) : null}

          {project.excerpt ? (
            <p style={{ opacity: 0.8, marginTop: 16 }}>{project.excerpt}</p>
          ) : null}

          {project.content ? (
            <div
              style={{
                opacity: 0.8,
                marginTop: 16,
                whiteSpace: "pre-wrap",
              }}
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{ __html: project.content }}
            />
          ) : null}
        </>
      ) : (
        <p style={{ opacity: 0.8 }}>Detalhes do projeto em breve.</p>
      )}
    </main>
  );
}

