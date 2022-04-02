import React from "react";
import styled from "styled-components";
import Sidebar from "./components/Sidebar";
import Home from "./components/Pages/Home/Home";
import ImportFile from "./components/Pages/Import/ImportFile";
import Records from "./components/Pages/Records/Records";
import Live from "./components/Pages/Live/Live";

//setup react router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Settings from "./components/Pages/Settings/Settings";
export default function App() {
  return (
    <Router>
      <Div>
        <Sidebar />
        {/* <Dashboard /> */}
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/import" component={ImportFile} />
          <Route path="/records" component={Records} />
          <Route path="/live" component={Live} />
          <Route path="/" component={Settings} />
          
        </Switch>
      </Div>
    </Router>
  );
}

const Div = styled.div`
  position: relative;
`;
