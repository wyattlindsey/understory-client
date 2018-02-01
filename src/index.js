import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App/index'

const Root = props => <App {...props} />

if (typeof window !== 'undefined') {
  ReactDOM.render(Root(), document.getElementById('root'))

  if (module.hot) {
    module.hot.accept('components/App', () => {
      ReactDOM.render(Root(), document.getElementById('root'))
    })
  }
}

export default Root
