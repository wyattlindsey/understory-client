// @flow

import * as React from 'react'
import cssModules from 'react-css-modules'
import styles from './App.css'

import Routes from 'routes'

class App extends React.PureComponent<void> {
  render() {
    return (
      <div>
        <Routes {...this.props} />
      </div>
    )
  }
}

export default cssModules(App, styles)
