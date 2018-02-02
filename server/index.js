'use strict'

const chalk = require('chalk')
const express = require('express')
const favicon = require('serve-favicon')
const logger = require('morgan')
const path = require('path')

const app = express()
const port = process.env.PORT || '3000'
const isProduction = process.env.NODE_ENV === 'production'

module.exports = (() => {
  console.log('port', port)
  app.use(logger(isProduction ? 'combined' : 'dev'))

  app.use(favicon(path.resolve(__dirname, '../dist', 'favicon.ico')))

  app.use('/', express.static(path.resolve(__dirname, '../dist')))

  /* eslint-disable no-console */
  app.listen(port, () => {
    console.log(chalk.bold(`Starting server on port ${port}`))
  })
  /* eslint-enable no-console */
})()
