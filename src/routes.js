import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from './screens/Home'

const allRoutes = [
  {
    name: 'home',
    Component: Home,
    path: '/',
    isExact: true,
  },
]

const getPathToRoute = routeName =>
  allRoutes.find(route => route.name === routeName).path

const Routes = () => (
  <Switch>
    {allRoutes.map(route => {
      const { name, Component, path, isExact } = route
      return (
        <Route exact={isExact} path={path} key={name}>
          <Component />
        </Route>
      )
    })}
  </Switch>
)

export { getPathToRoute }
export default Routes
