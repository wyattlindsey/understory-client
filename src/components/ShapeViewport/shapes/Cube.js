// @flow

import * as React from 'react'

import type { Color } from 'types/shape'

type Props = {
  color: Color,
  rotation: { x: number, y: number, z: number, order: string },
}

const Cube = (props: Props) => (
  <mesh rotation={props.rotation}>
    <boxGeometry depth={1} height={1} width={1} />
    <meshStandardMaterial color={props.color} />
  </mesh>
)

export default Cube
