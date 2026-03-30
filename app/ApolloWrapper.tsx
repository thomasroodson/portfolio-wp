"use client";

import { HttpLink } from "@apollo/client";
import {
  ApolloClient,
  ApolloNextAppProvider,
  InMemoryCache,
} from "@apollo/client-integration-nextjs";
import type { PropsWithChildren } from "react";

function makeClient() {
  const uri =
    process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT ??
    process.env.GRAPHQL_ENDPOINT ??
    // Endpoint real do CMS/GraphQL
    "https://api.thomasroodson.dev/graphql";

  const httpLink = new HttpLink({ uri });

  return new ApolloClient({
    cache: new InMemoryCache(),
    link: httpLink,
  });
}

export function ApolloWrapper({
  children,
}: PropsWithChildren) {
  return <ApolloNextAppProvider makeClient={makeClient}>{children}</ApolloNextAppProvider>;
}

