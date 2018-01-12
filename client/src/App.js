import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Videos from "./pages/Videos";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";

console.log("Running client/src/App.js--- Router path");
const App = () =>
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/videos" component={Videos} />
        <Route exact path="/videos/:id" component={Detail} />
       {/*} <Route exact path="/videos/:id" component={Detail} />  */}
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>;
export default App;