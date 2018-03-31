export const ACTIONS = {
  TEST_ACTION: 'TEST_ACTION',
}

export const testAction = testParam => {
  return {
    testParam,
    type: ACTIONS.TEST_ACTION,
  }
}

export default {
  ACTIONS,
  testAction,
}
