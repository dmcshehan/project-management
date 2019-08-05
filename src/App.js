import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/";
import ProjectDetails from "./components/Project/ProjectDetails/ProjectDetails";
import SignIn from "./components/Auth/SignIn/SignIn";
import SignUp from "./components/Auth/SignUp/SignUp";
import CreateProject from "./components/Project/CreateProject/CreateProject";
import Layout from "./components/Layout/";

//redux
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/project/:id" component={ProjectDetails} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/create" component={CreateProject} />
        </Layout>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
