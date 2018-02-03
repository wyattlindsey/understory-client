'use strict'

const chalk = require('chalk')
const express = require('express')
const favicon = require('serve-favicon')
const logger = require('morgan')
const path = require('path')
const render = require('../private/server').appToString

const app = express()
const port = process.env.PORT || '3000'
const isProduction = process.env.NODE_ENV === 'production'

module.exports = (() => {
  app.use(logger(isProduction ? 'combined' : 'dev'))

  app.use(favicon(path.resolve(__dirname, '../dist/favicon.ico')))

  // app.use('/', express.static(path.resolve(__dirname, '../dist')))

  app.get('/', (req, res, next) => {
    try {
      res.render('index.html')
    } catch (e) {
      next(e)
    }
  })

  /* eslint-disable no-console */
  app.listen(port, () => {
    console.log(chalk.bold(`Starting server on port ${port}`))
  })
  /* eslint-enable no-console */
})()
