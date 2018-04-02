import React from 'react'
import { Router, Route, Link } from 'react-router'

import App from './App'
import Dashboard from './scenes/dashboard'

export default props => (
    <Router>
    <Route path="/" component={App}>
      <Route path="about" component={Dashboard} />
    </Route>
  </Router>
)