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

const token = window.sessionStorage.getItem('gh-test-token') || "";

if (!token) {
  console.log("YOU SHOULD ADD YOUR GITHUB TOKEN TO SESSION STORAGE WITH gh-test-token KEY")
  console.log('TYPE IN CONSOLE CODE BELOW.')
  console.log('window.sessionStorage.setItem("gh-test-token", "TOKEN")')
  console.log('WHERE TOKEN IS YOUR GITHUB TOKEN.')
}

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
