import { expect } from 'code'
import * as types from '../../../actions/action-types'

const type = types.type

describe('Action Types', () => {
  it('should use a unique value for each action', () => {
    const sortedActionValues = Object.values(type).sort()

    sortedActionValues.reduce((previous, current) => {
      expect(current).not.equal(previous)

      return current
    })
  })
})
