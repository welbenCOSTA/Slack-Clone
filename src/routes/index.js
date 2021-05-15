import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Home from '../pages/Homepage'

const Routes = () => (
  <Switch>
    <Route path="/" component={Home} exact />
  </Switch>
)

export default Routes;
