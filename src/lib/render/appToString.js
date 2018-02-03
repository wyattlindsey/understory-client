import { renderToString } from 'react-dom/server'

import Root from 'index'

const appToString = (location, context) => {
  return renderToString(Root({ location, context }))
}

export default appToString
