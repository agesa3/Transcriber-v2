import React from "react";
import styled from "styled-components";
import Sidebar from "./components/Sidebar";
import Home from "./components/Pages/Home/Home";
import ImportFile from "./components/Pages/Import/ImportFile";
import Records from "./components/Pages/Records/Records";
import Live from "./components/Pages/Live/Live";
import Landing from "./components/Pages/Landing/Landing";

//setup react router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Settings from "./components/Pages/Settings/Settings";
export default function App() {

  // const [data, setData] = React.useState(null);

  // React.useEffect(() => {
  //   fetch("/api")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  // }, []);


  return (
    // <div className="App">
    //   <header className="App-header">
    //     <p>{!data ? "Loading..." : data}</p>
    //   </header>
    // </div>
    <Router>
      <Div>
        <Switch>
          <Route path="/landing" component={Landing} />
        </Switch>
      </Div>
      <Div>
        <Sidebar />
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/import" component={ImportFile} />
          <Route path="/records" component={Records} />
          <Route path="/live" component={Live} />
          <Route path="/settings" component={Settings} />

        </Switch>
      </Div>
    </Router>
  );
}

const Div = styled.div`
  position: relative;
`;
