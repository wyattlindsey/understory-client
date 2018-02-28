import { createReducer } from '../lib/redux/reducer'
import { ACTIONS as TEST_ACTIONS } from '../actions/test'

const initialState = {
  testValue: 2,
}

const actions = {
  [TEST_ACTIONS.TEST_ACTION]: (state, action) => {
    return {
      ...state,
      testValue: action.testParam,
    }
  },
}

export default createReducer(initialState, actions)
