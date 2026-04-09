import type { ProjectCardProps } from "@/app/components/Portfolio/ProjectCard";
import type { WpProjetosQueryData } from "@/lib/wpGraphqlTypes";
import { htmlToPlainText } from "@/lib/htmlEntities";

export const PLACEHOLDER_PROJECT_IMAGE =
  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=60";

export function wpUriToProjectHref(uri: string | null | undefined): string | undefined {
  if (!uri) return undefined;
  const trimmed = uri.replace(/^\/+|\/+$/g, "");
  const segments = trimmed.split("/").filter(Boolean);
  const slug = segments[segments.length - 1];
  if (!slug) return undefined;
  return `/projects/${slug}`;
}

/** Prefer `slug` do GraphQL; fallback para o último segmento de `uri`. */
export function projectNodeToHref(node: {
  slug?: string | null;
  uri?: string | null;
}): string | undefined {
  const s = node.slug?.trim();
  if (s) return `/projects/${s}`;
  return wpUriToProjectHref(node.uri);
}

export function mapProjetosToCards(
  data: WpProjetosQueryData | null | undefined,
  toPlain: (html: string | null | undefined) => string = htmlToPlainText,
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

    const href = projectNodeToHref(node);
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

export interface ProjectListItem {
  slug: string;
  title: string;
  href: string;
}

/** Lista enxuta para `/projects` (mesma origem que os cards da home). */
export function mapProjetosToListItems(
  data: WpProjetosQueryData | null | undefined,
): ProjectListItem[] {
  const edges = data?.projetos?.edges ?? [];
  const items: ProjectListItem[] = [];

  for (const edge of edges) {
    const node = edge?.node;
    if (!node?.title) continue;
    const href = projectNodeToHref(node);
    if (!href) continue;
    const slug = href.replace(/^\/projects\//, "");
    items.push({ slug, title: String(node.title), href });
  }

  return items;
}
