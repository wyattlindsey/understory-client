import TestActions from './test'
import type { Action as TestAction } from './test'

export type Action = TestAction // | NextAction | AnotherAction, etc.

export default {
  TestActions,
}
