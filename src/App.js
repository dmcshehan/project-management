import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/";
import Layout from "./components/Layout/";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Route exact path="/dashboard" component={Dashboard} />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
