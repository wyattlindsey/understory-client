// @flow

import * as React from 'react'
import * as THREE from 'three'
import Store from 'store'
import isEqual from 'lodash/isEqual'

import Shapes from './shapes'

import type { Color } from 'types/shape'

type Props = {
  shouldUpdate: boolean,
}

type State = {
  color: Color,
  shapeRotation: { x: number, y: number, z: number, order: string },
}

class ShapeViewport extends React.PureComponent<Props, State> {
  state = {
    color: { r: 10, g: 200, b: 10, a: 1 },
    shapeRotation: new THREE.Euler(),
  }

  componentDidUpdate(prevProps, prevState) {
    if (!prevProps.shouldUpdate && this.props.shouldUpdate) {
      this.animate()
    }
    const color = Store.getStore().getState().shape.color

    if (!isEqual(prevState.color && color)) {
      this.setState({ color })
    }
  }

  animate() {
    const { x, y } = this.state.shapeRotation
    this.setState({
      shapeRotation: new THREE.Euler(x + 0.1, y + 0.1),
    })
  }

  render() {
    const { r, g, b } = this.state.color

    return (
      <Shapes.Cube
        color={new THREE.Color(`rgb(${r}, ${g}, ${b})`)}
        rotation={this.state.shapeRotation}
      />
    )
  }
}

export default ShapeViewport
