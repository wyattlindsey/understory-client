// @flow

import { asyncComponent } from 'react-async-component'

import LoadingIndicator from '../ThreeViewport/LoadingIndicator'

const asyncShapeViewport = asyncComponent({
  name: 'ShapeViewport',
  resolve: () => System.import('./ShapeViewport').then(m => m.default),
  serverMode: 'defer',
})

// export default asyncShapeViewport

export { default } from './ShapeViewport'
