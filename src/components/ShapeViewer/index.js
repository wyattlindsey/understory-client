import * as React from 'react'
import { asyncComponent } from 'react-async-component'

const asyncShapeViewer = asyncComponent({
  LoadingComponent: () => <div>Loading component</div>,
  name: 'ShapeViewer',
  resolve: () => System.import('./ShapeViewer'),
})

export default asyncShapeViewer
