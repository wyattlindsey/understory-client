// @flow

import React from 'react'

import Store from 'store'
import { testAction } from 'actions/test'

import React3 from 'react-three-renderer'
import * as THREE from 'three'

import ShapeViewport from 'components/ShapeViewport'

type Props = {
  width: number | null,
}

type State = {
  shouldUpdate: boolean,
}

class ThreeViewport extends React.Component<Props, State> {
  state = {
    shouldUpdate: false,
  }

  static defaultProps = {
    width: null,
  }

  /* eslint-disable no-invalid-this */
  onAnimate = () => {
    if (!this.state.shouldUpdate) {
      this.setState({
        shouldUpdate: true,
      })

      setTimeout(() => {
        this.setState({
          shouldUpdate: false,
        })
      }, 17)
    }
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
          <ShapeViewport shouldUpdate={this.state.shouldUpdate} />
        </scene>
      </React3>
    ) : null
  }
}

export default ThreeViewport
