import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import Store from 'store'
import App from 'components/App'

import reducers from 'reducers'

const store = Store.init(reducers)

console.log('store', store)

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
