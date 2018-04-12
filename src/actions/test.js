// @flow

export const ACTIONS = {
  TEST_ACTION: 'TEST_ACTION',
}

type TestAction = {
  testParam: number,
  type: 'TEST_ACTION',
}

export type Action = TestAction // | NextAction | AnotherAction, etc.

export const testAction = (testParam: number): TestAction => {
  return {
    testParam,
    type: ACTIONS.TEST_ACTION,
  }
}

export default {
  ACTIONS,
  testAction,
}
