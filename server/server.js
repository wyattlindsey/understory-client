'use strict'

const chalk = require('chalk')
import express from 'express'
const favicon = require('serve-favicon')
const hbs = require('hbs')
const logger = require('morgan')
const path = require('path')
const render = require('../private/server').appToString
const Store = require('../src/store')

const app = express()
const port = process.env.PORT || '3000'
const isProduction = process.env.NODE_ENV === 'production'

module.exports = (() => {
  app.use(logger(isProduction ? 'combined' : 'dev'))

  app.use(favicon(path.resolve(__dirname, '../dist/favicon.ico')))

  app.set('views', path.resolve(__dirname, '../dist'))
  app.set('view engine', 'html')
  app.engine('html', hbs.__express)

  hbs.registerPartials(path.resolve(__dirname, '../src/partials'))

  app.get('/', (req, res, next) => {
    const baseUrl = `/${req.url.split('/')[1].split('?')[0]}`
    let markup

    const store = Store.init({ test: { testValue: 420 } })
    console.log('Store! ', Store)
    console.log('store! ', store)

    // this is where async work could be done before page is served

    const initialState = store.getStore().getState()
    const isoReduxMarkup = `<script>window.__INITIAL_STATE__ = initialState</script>`

    try {
      markup = render(req.url, {})
      res.render('index', {
        isDev: process.env.NODE_ENV === 'development',
        isProd: process.env.NODE_ENV === 'production',
        isoReduxMarkup,
        markup,
      })
    } catch (e) {
      console.error(e)
      next(e)
    }
  })

  app.use('/', express.static(path.resolve(__dirname, '../dist')))

  /* eslint-disable no-console */
  app.listen(port, () => {
    console.log(chalk.bold(`Starting server on port ${port}`))
  })
  /* eslint-enable no-console */
})()
