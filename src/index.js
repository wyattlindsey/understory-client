import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import Store, { initialState } from 'store'
import App from 'components/App'

import reducers from 'reducers'

// doesn't initialize on server-side render
const store =
  typeof window !== 'undefined' && process.NODE_ENV === 'production'
    ? Store.init(JSON.parse(window.__INITIAL_STATE__))
    : Store.init()

const Root = props => (
  <Provider store={store}>
    <App {...props} />
  </Provider>
)

if (typeof window !== 'undefined') {
  ReactDOM.render(Root(), document.getElementById('root'))

  // if (module.hot) {
  //   module.hot.accept('components/App', () => {
  //     ReactDOM.render(Root(), document.getElementById('root'))
  //   })
  // }
}

export default Root
