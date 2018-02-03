import { renderToString } from 'react-dom/server'

import Root from '../index'

export const appToString = (location, context) => {
  return renderToString(Root({ location, context }))
}
