// @flow

import Loadable from 'react-loadable'

import LoadingIndicator from '../ThreeViewport/LoadingIndicator'

const asyncShapeViewport = Loadable({
  loader: () => System.import('./ShapeViewport'),
  loading: LoadingIndicator,
})

export default asyncShapeViewport
