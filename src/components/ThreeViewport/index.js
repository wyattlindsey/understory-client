// @flow

import { asyncComponent } from 'react-async-component'

import LoadingIndicator from './LoadingIndicator'

const asyncThreeViewport = asyncComponent({
  LoadingComponent: LoadingIndicator,
  name: 'ThreeViewport',
  resolve: () => System.import('./ThreeViewport'),
  serverMode: 'defer',
})

export default asyncThreeViewport
