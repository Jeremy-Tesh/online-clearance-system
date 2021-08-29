import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./routes/PrivateRoute";
import IndexRoute from "./routes";

import { AuthProvider } from "./contexts/AuthContext";
import Login from "./routes/Login";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/IndexRoute" component={IndexRoute} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
