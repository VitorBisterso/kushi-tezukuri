import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { allRoutes } from './routes'

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

export default Routes
