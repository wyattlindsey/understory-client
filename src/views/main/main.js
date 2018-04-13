import React from 'react'

import cssModules from 'react-css-modules'
import styles from './main.css'

import Store from 'store'
import { testAction } from 'actions/test'

import Button from 'material-ui/Button'
import SubComponent from 'components/SubComponent'
import React3 from 'react-three-renderer'
import * as THREE from 'three'

class Main extends React.Component {
  state = {
    cubeRotation: new THREE.Euler(),
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
    const width = 500
    const height = 500

    return (
      <div onClick={this.handleClick} styleName="test">
        <Button color="primary" variant="raised">
          Test
        </Button>
        <SubComponent />
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
      </div>
    )
  }
}

export default cssModules(Main, styles)
