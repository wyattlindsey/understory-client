import React from 'react'

import cssModules from 'react-css-modules'
import styles from './App.css'

import Store from 'store'
import { testAction } from 'actions/test'

class App extends React.Component {
  handleClick = () => {
    Store.dispatch(testAction(420))
  }

  render() {
    return (
      <div onClick={this.handleClick} styleName="test">
        Hello Understory!!!
      </div>
    )
  }
}

export default cssModules(App, styles)
