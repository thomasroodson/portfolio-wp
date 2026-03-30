import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

export function createApolloClient() {
  const uri =
    process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT ??
    process.env.GRAPHQL_ENDPOINT ??
    // Endpoint real do CMS/GraphQL (fallback)
    "https://api.thomasroodson.dev/graphql";

  const httpLink = new HttpLink({ uri });

  return new ApolloClient({
    cache: new InMemoryCache(),
    link: httpLink,
  });
}

