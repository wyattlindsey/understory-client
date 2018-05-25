// @flow

import { asyncComponent } from 'react-async-component'

import LoadingIndicator from './LoadingIndicator'

const asyncThreeViewport = asyncComponent({
  LoadingComponent: LoadingIndicator,
  name: 'ThreeViewport',
  resolve: () => System.import('./ThreeViewport').then(m => m.default),
  serverMode: 'defer',
})

export default asyncThreeViewport
