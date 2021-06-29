import React from "react";
import "./App.css";
import { ApolloProvider } from "@apollo/client";
import { client } from "./graphql";
import { BrowserRouter } from "react-router-dom";
import { Routing } from "./routing";

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Routing />
        </BrowserRouter>
      </ApolloProvider>
    </>
  );
}

export default App;
