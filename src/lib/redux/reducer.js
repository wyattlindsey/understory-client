// @flow

import type { State } from 'reducers'
import type { Action } from 'actions'

export const createReducer = (
  initialState: State = {},
  actionHandlers: Action = {}
): any => {
  return (state: State = initialState, action: Action) => {
    if (typeof actionHandlers[action.type] === 'function') {
      return actionHandlers[action.type](state, action)
    }

    return state
  }
}
