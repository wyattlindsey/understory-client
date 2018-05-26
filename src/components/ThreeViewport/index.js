// @flow

import { asyncComponent } from 'react-async-component'

import LoadingIndicator from './LoadingIndicator'

const asyncThreeViewport = asyncComponent({
  LoadingComponent: LoadingIndicator,
  name: 'ThreeViewport',
  resolve: () => {
    return new Promise(resolve => {
      setTimeout(() => {
        import('./ThreeViewport').then(m => resolve(m))
      }, 4000)
    })
  },
  serverMode: 'defer',
})

export default asyncThreeViewport
