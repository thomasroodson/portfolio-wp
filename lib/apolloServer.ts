import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

/**
 * Fetch alinhado ao modelo estático do Next: cache forte e sem revalidação por tempo.
 * Atualizações de conteúdo vêm do webhook (`revalidatePath` / `revalidateTag`).
 */
function staticGraphqlFetch(input: RequestInfo | URL, init?: RequestInit) {
  return fetch(input, {
    ...init,
    cache: "force-cache",
    next: { revalidate: false },
  });
}

export function createApolloClient() {
  const uri =
    process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT ??
    process.env.GRAPHQL_ENDPOINT ??
    "https://api.thomasroodson.dev/graphql";

  const httpLink = new HttpLink({ uri, fetch: staticGraphqlFetch });

  return new ApolloClient({
    cache: new InMemoryCache(),
    link: httpLink,
  });
}

