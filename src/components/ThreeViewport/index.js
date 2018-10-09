// @flow

import { asyncComponent } from 'react-async-component'

import LoadingIndicator from './LoadingIndicator'

const asyncThreeViewport = asyncComponent({
  LoadingComponent: LoadingIndicator,
  name: 'ThreeViewport',
  resolve: () => {
    return new Promise(resolve => {
      import('./ThreeViewport').then(m => resolve(m))
    })
  },
  serverMode: 'defer',
})

export default asyncThreeViewport
