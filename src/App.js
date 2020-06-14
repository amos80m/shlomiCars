import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Login, Dashboard } from './screens';

function App() {
  return ( <BrowserRouter>
    <Switch>
      <Route path="/login" render={() => <Login />} />
      <Route path="/" render={() => <Dashboard />} />
    </Switch>
    </BrowserRouter>);
}

export default App;
