// @flow

import type { Color } from '../types/shape'

export const ACTIONS = {
  SET_COLOR: 'SET_COLOR',
}

type SetColor = {
  color: Color,
  type: 'SET_COLOR',
}

export type Action = SetColor // | NextAction | AnotherAction, etc.

export const setColor = (color: Color): SetColor => {
  return {
    color,
    type: ACTIONS.SET_COLOR,
  }
}

export default {
  ACTIONS,
  setColor,
}
