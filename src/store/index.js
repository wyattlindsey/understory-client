// @flow

import { createLogger } from 'redux-logger'
import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import immutableStateInvariant from 'redux-immutable-state-invariant'

type State = { [any]: any }

export const initialState: State = {
  test: {
    testValue: 420,
  },
}

export const configureStore = (state: State = initialState, reducers: any): any => {
  const middlewares = []

  if (process.env.NODE_ENV !== 'production') {
    // Throw errors if a reducer's state is mutated
    middlewares.push(
      applyMiddleware(
        immutableStateInvariant({
          isImmutable(value) {
            return (
              typeof value !== 'object' ||
              value === null ||
              typeof value === 'undefined' ||
              value instanceof Promise
            )
          },
        })
      )
    )

    // Log state changes
    middlewares.push(applyMiddleware(createLogger({ collapsed: true })))
  }

  const combinedReducers = combineReducers({ ...reducers })

  return createStore(combinedReducers, state, compose(...middlewares))
}

class Store {
  init(initialState: State, reducers) {
    this.store = configureStore(initialState, reducers)
    return this.store
  }

  getStore() {
    return this.store
  }

  getHistory() {
    return history // eslint-disable-line no-restricted-globals
  }

  dispatch(...args) {
    return this.store.dispatch(...args)
  }
}

export default new Store()
