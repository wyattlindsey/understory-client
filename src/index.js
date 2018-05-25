import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import { SheetsRegistry } from 'react-jss'
import JssProvider from 'react-jss/lib/JssProvider'
import {
  MuiThemeProvider,
  createMuiTheme,
  createGenerateClassName,
} from '@material-ui/core/styles'
import { green, red } from '@material-ui/core/colors'

import Store, { initialState } from 'store'
import App from 'components/App'

import reducers from './reducers'

const isRenderingOnServer = typeof window === 'undefined'

// doesn't initialize on server-side render todo < still true?
const store =
  typeof !isRenderingOnServer && process.NODE_ENV === 'production'
    ? Store.init(JSON.parse(window.__INITIAL_STATE__), reducers)
    : Store.init(initialState, reducers)

const sheetsRegistry = new SheetsRegistry()

const theme = createMuiTheme({
  palette: {
    primary: green,
    accent: red,
    type: 'light',
  },
})

const generateClassName = createGenerateClassName()

const muiOtherProps = isRenderingOnServer ? { sheetsManager: new Map() } : {}

const MuiWrapper = isRenderingOnServer ? (
  <JssProvider
    registry={sheetsRegistry}
    generateClassName={generateClassName}
  />
) : (
  <div />
)

const Root = props => (
  <Provider store={store}>
    <MuiWrapper>
      <MuiThemeProvider theme={theme} {...muiOtherProps}>
        <App {...props} />
      </MuiThemeProvider>
    </MuiWrapper>
  </Provider>
)

if (typeof window !== 'undefined') {
  ReactDOM.render(Root(), document.getElementById('root'))

  if (module.hot) {
    module.hot.accept('components/App', () => {
      ReactDOM.render(Root(), document.getElementById('root'))
    })
  }
}

export default Root
