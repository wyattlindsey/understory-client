import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import cssModules from 'react-css-modules'
import styles from './App.css'

import Store from 'store'
import { testAction } from 'actions/test'

class App extends React.Component {
  static propTypes = {
    test: PropTypes.number,
  }

  handleClick = () => {
    const {test} = this.props
    Store.dispatch(testAction(test * test))
  }

  render() {
    return (
      <div onClick={this.handleClick} styleName="test">
        Hello Understory!!!
        {this.props.test}
      </div>
    )
  }
}

export default connect(state => {
  return {
    test: state.test.testValue,
  }
})(cssModules(App, styles))
