import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/";
import ProjectDetails from "./components/Project/ProjectDetails/ProjectDetails";
import SignIn from "./components/Auth/SignIn/SignIn";
import SignUp from "./components/Auth/SignUp/SignUp";
import Layout from "./components/Layout/";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/project/:id" component={ProjectDetails} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
