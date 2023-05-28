import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { RouterProvider, createHashRouter } from "react-router-dom";

import { RepositoryPage } from "src/pages/RepositoryPage/RepositoryPage";
import { MainPage } from "../pages/MainPage/MainPage";

import styles from "./App.module.css";

const token = "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";
const httpLink = createHttpLink({
  uri: "https://api.github.com/graphql",
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${token}`,
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const router = createHashRouter([
  { path: "/", element: <MainPage /> },
  { path: "repository/:repositoryId", element: <RepositoryPage /> },
]);

export const App = () => {
  return (
    <ApolloProvider client={client}>
      <main className={styles.container}>
        <RouterProvider router={router} />
      </main>
    </ApolloProvider>
  );
};
