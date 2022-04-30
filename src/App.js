import React from "react";
import styled from "styled-components";
import Sidebar from "./components/Sidebar";
import Home from "./components/Pages/Home/Home";
import ImportFile from "./components/Pages/Import/ImportFile";
import Records from "./components/Pages/Records/Records";
import Live from "./components/Pages/Live/Live";
import Print from "./components/Pages/Home/Print";

//setup react router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Settings from "./components/Pages/Settings/Settings";
export default function App() {
  return (
    <Router>
      {/* check if path is /print dont display sidebar else display sidebar */}
      <Switch>
        <Route exact path="/home">
          <Sidebar />
          <Home />
        </Route>
        <Route path="/import">
          <Sidebar />
          <ImportFile />
        </Route>
        <Route path="/records">
          <Sidebar />
          <Records />
        </Route>
        <Route path="/live">
          <Sidebar />
          <Live />
        </Route>
        <Route path="/print">
          <Print />
        </Route>
        <Route path="/settings">
          <Sidebar />
          <Settings />
        </Route>
      </Switch>
    </Router>
  );
}

const Div = styled.div`
  position: relative;
`;
