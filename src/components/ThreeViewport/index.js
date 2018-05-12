import * as React from 'react'
import { asyncComponent } from 'react-async-component'
import { CircularProgress } from 'material-ui/Progress'

const asyncShapeViewer = asyncComponent({
  LoadingComponent: () => <CircularProgress />,
  name: 'ShapeViewer',
  resolve: () => System.import('./ThreeViewport'),
  serverMode: 'defer',
})

export default asyncShapeViewer
