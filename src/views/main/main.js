import React from 'react'

import cssModules from 'react-css-modules'
import styles from './main.css'


import Store from 'store'
import { testAction } from 'actions/test'

import SubComponent from 'components/SubComponent'

class Main extends React.Component {
  handleClick = () => {
    Store.dispatch(testAction(Math.random() * 100))
  }

  render() {
    return (
      <div onClick={this.handleClick} styleName="test">
        Hello Understory!!!
        <SubComponent />
      </div>
    )
  }
}

export default cssModules(Main, styles)