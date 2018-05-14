// @flow

import { asyncComponent } from 'react-async-component'

import LoadingIndicator from './LoadingIndicator'

const asyncShapeViewer = asyncComponent({
  LoadingComponent: LoadingIndicator,
  name: 'ShapeViewer',
  resolve: () => System.import('./ThreeViewport'),
  serverMode: 'defer',
})

export default asyncShapeViewer
