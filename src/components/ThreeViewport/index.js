// @flow

import Loadable from 'react-loadable'

import LoadingIndicator from './LoadingIndicator'

const asyncShapeViewer = Loadable({
  loader: () => System.import('./ThreeViewport'),
  loading: LoadingIndicator,
})

export default asyncShapeViewer
