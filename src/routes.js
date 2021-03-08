import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from './screens/Home'
import About from './screens/About'
import OurStore from './screens/OurStore'

const allRoutes = [
  {
    name: 'home',
    Component: Home,
    path: '/',
    isExact: true,
  },
  {
    name: 'about',
    Component: About,
    path: '/about',
    isExact: false,
  },
  {
    name: 'ourStore',
    Component: OurStore,
    path: '/ourStore',
    isExact: false,
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
