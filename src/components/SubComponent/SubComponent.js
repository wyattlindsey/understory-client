// @flow

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class SubComponent extends React.PureComponent {
  static propTypes = {
    test: PropTypes.number.isRequired,
  }

  render() {
    return <div>{this.props.test}</div>
  }
}

export default connect(state => {
  return {
    test: state.test.testValue,
  }
})(SubComponent)
