import type { Metadata } from "next";
import Link from "next/link";
import { createApolloClient } from "@/lib/apolloServer";
import { mapProjetosToListItems } from "@/lib/wpProjectMapper";
import type { WpProjetosQueryData } from "@/lib/wpGraphqlTypes";
import { GET_PROJETOS } from "@/lib/wpQueries";

export const metadata: Metadata = {
  title: "Projetos",
};

/** Só revalida via webhook (`revalidatePath`), não por intervalo. */
export const revalidate = false;

export default async function ProjectsPage() {
  let items: ReturnType<typeof mapProjetosToListItems> = [];

  try {
    const client = createApolloClient();
    const { data } = await client.query({ query: GET_PROJETOS });
    items = mapProjetosToListItems(data as WpProjetosQueryData | null | undefined);
  } catch (err) {
    console.error("app/projects - GraphQL fetch failed:", err);
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
        Projects
      </h1>
      {items.length === 0 ? (
        <p style={{ opacity: 0.8 }}>Nenhum projeto listado no momento.</p>
      ) : (
        <ul>
          {items.map((p) => (
            <li key={p.slug}>
              <Link href={p.href}>{p.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
