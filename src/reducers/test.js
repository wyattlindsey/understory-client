import { createReducer } from 'lib/redux/reducer'
import { ACTIONS as TEST_ACTIONS } from 'actions/test'

const initialState = {
  testValue: null,
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
