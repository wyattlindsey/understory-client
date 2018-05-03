// @flow

import React from 'react'

import Store from 'store'
import { testAction } from 'actions/test'

import React3 from 'react-three-renderer'
import * as THREE from 'three'

type Props = {
  width: number | null,
}

type State = {
  cubeRotation: { x: number, y: number, z: number, order: string },
}

class ShapeViewer extends React.PureComponent<Props, State> {
  state = {
    cubeRotation: new THREE.Euler(),
  }

  static defaultProps = {
    width: null,
  }

  /* eslint-disable no-invalid-this */

  onAnimate = () => {
    const { x, y } = this.state.cubeRotation
    this.setState({
      cubeRotation: new THREE.Euler(x + 0.1, y + 0.1),
    })
  }

  /* eslint-enable no-invalid-this */

  get cameraPosition() {
    if (!this._cameraPosition) this._cameraPosition = new THREE.Vector3(1, 1, 5)
    return this._cameraPosition
  }

  handleClick = () => {
    Store.dispatch(testAction(Math.random() * 100))
  }

  render() {
    const { width } = this.props
    const height = 512

    return width ? (
      <React3
        height={height}
        mainCamera="camera"
        onAnimate={this.onAnimate}
        width={width}
      >
        <scene>
          <perspectiveCamera
            aspect={width / height}
            far={1000}
            fov={75}
            name="camera"
            near={0.1}
            position={this.cameraPosition}
          />
          <mesh rotation={this.state.cubeRotation}>
            <boxGeometry depth={1} height={1} width={1} />
            <meshBasicMaterial color={0x88ff88} />
          </mesh>
        </scene>
      </React3>
    ) : null
  }
}

export default ShapeViewer
