import React from 'react'
import { BrowserRouter, Route, StaticRouter, Switch } from 'react-router-dom'

// Components
import Main from 'views/main'

const Routes = props => {
  const RoutesBody = (
    <Switch>
      <Route component={Main} exact path="/" />
      <Route component={Main} />
    </Switch>
  )

  // Browser rendering
  if (typeof window !== 'undefined') {
    return <BrowserRouter>{RoutesBody}</BrowserRouter>
  }

  // Server rendering
  const context = {}
  return (
    <StaticRouter context={context} {...props}>
      {RoutesBody}
    </StaticRouter>
  )
}

export default Routes
