// @flow

import React from 'react'
import * as THREE from 'three'

type Props = {
  shouldUpdate: boolean,
}

type State = {
  cubeRotation: { x: number, y: number, z: number, order: string },
}

class ShapeViewport extends React.PureComponent<Props, State> {
  state = {
    cubeRotation: new THREE.Euler(),
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.shouldUpdate && this.props.shouldUpdate) {
      this.animate()
    }
  }

  animate() {
    const { x, y } = this.state.cubeRotation
    this.setState({
      cubeRotation: new THREE.Euler(x + 0.1, y + 0.1),
    })
  }

  render() {
    return (
      <mesh rotation={this.state.cubeRotation}>
        <boxGeometry depth={1} height={1} width={1} />
        <meshStandardMaterial color={0x88ff88} />
      </mesh>
    )
  }
}

export default ShapeViewport
