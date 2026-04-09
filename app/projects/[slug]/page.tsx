import type { Metadata } from "next";
import { createApolloClient } from "../../../lib/apolloServer";
import { mapProjetosToListItems } from "../../../lib/wpProjectMapper";
import type { WpProjetosQueryData } from "../../../lib/wpGraphqlTypes";
import { GET_PROJECT_BY_SLUG, GET_PROJETOS } from "../../../lib/wpQueries";

/** Só revalida via webhook (`revalidatePath`), não por intervalo. */
export const revalidate = false;
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
  try {
    const client = createApolloClient();
    const { data } = await client.query({ query: GET_PROJETOS });
    const items = mapProjetosToListItems(
      data as WpProjetosQueryData | null | undefined,
    );
    return items.map((p) => ({ slug: p.slug }));
  } catch {
    return [];
  }
}

function excerptToPlain(excerpt: string | null | undefined) {
  if (!excerpt) return undefined;
  const plain = excerpt.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
  return plain || undefined;
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const slug = String(params?.slug ?? "");
  const fallbackTitle = slug.replace(/-/g, " ");

  try {
    const client = createApolloClient();
    const result = await client.query({
      query: GET_PROJECT_BY_SLUG,
      variables: { slug },
    });

    const postBy =
      (result.data as WpProjectBySlugQueryData | undefined)?.postBy ?? null;
    const title = postBy?.title?.trim() || fallbackTitle;
    const description = excerptToPlain(postBy?.excerpt ?? undefined);

    return {
      title,
      ...(description ? { description } : {}),
    };
  } catch {
    return { title: fallbackTitle };
  }
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
      <h1
        style={{
          margin: 0,
          marginBottom: 16,
          fontSize: "clamp(22px, 5.5vw, 32px)",
          lineHeight: 1.15,
        }}
      >
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

