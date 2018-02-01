export const ACTIONS = {
  TEST_ACTION: 'TEST_ACTION',
}

export const testAction = testParam => {
  return {
    type: ACTIONS.TEST_ACTION,
    testParam,
  }
}

export default {
  testAction,
  ACTIONS,
}
