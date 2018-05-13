// @flow

import { createReducer } from '../lib/redux/reducer'
import { ACTIONS as SHAPE_ACTIONS } from '../actions/shape'

import type { Action as ShapeAction } from '../actions/shape'
import type { Color } from '../types/shape'

export type State = {
  +color: Color,
}

const initialState: State = {
  color: { r: 10, g: 200, b: 10, a: 1 },
}

const actions = {
  [SHAPE_ACTIONS.SET_COLOR]: (state: State, action: ShapeAction): State => {
    return {
      ...state,
      color: action.color,
    }
  },
}

export default createReducer(initialState, actions)
