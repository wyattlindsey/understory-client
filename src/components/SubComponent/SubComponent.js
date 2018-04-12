// @flow

import * as React from 'react'
import { connect } from 'react-redux'

type Props = {
  test: number,
}

class SubComponent extends React.PureComponent<Props> {
  render(): React.Node {
    return <div>{this.props.test}</div>
  }
}

export default connect(state => {
  return {
    test: state.test.testValue,
  }
})(SubComponent)
