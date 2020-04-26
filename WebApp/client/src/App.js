import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import { PrivateRoute } from "./components/PrivateRoute.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-content">
          <Switch>
            {/* <Route exact path="/" component={} />
            <Route exact path="/signup" component={} />
            <PrivateRoute path="/dashboard" component={} /> */}
          </Switch>
        </div>
      </div>
    );
  }
}
export default App;