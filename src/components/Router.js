import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import App from '../App'
import ActiveRecipe from './ActiveRecipe'

const Router = props => (
  <HashRouter>
    <Switch>
      <Route exact path='/' component={App} />
      <Route exact path='/active-recipe/:id' component={ActiveRecipe} />
    </Switch>
  </HashRouter>
)

export default Router