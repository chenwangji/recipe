import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import App from '../App'
import ActiveRecipe from './ActiveRecipe'

const Router = props => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={App} />
      <Route exact path='/active-recipe/:id' component={ActiveRecipe} />
    </Switch>
  </BrowserRouter>
)

export default Router