import { renderToString } from 'react-dom/cjs/react-dom-server.node.production.min'

import Root from 'index'

export const appToString = (location, context) => {
  return renderToString(Root({ location, context }))
}
