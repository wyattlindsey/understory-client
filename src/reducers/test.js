// @flow

import { createReducer } from '../lib/redux/reducer'
import { ACTIONS as TEST_ACTIONS } from '../actions/test'

import type { Action as TestAction } from '../actions/test'

export type State = {
  +testValue: number,
}

const initialState: State = {
  testValue: 2,
}

const actions = {
  [TEST_ACTIONS.TEST_ACTION]: (state: State, action: TestAction): State => {
    return {
      ...state,
      testValue: action.testParam,
    }
  },
}

export default createReducer(initialState, actions)
