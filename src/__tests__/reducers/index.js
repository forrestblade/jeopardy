import { category, categories, clues, id } from '../../testData'
import { expect } from 'code'
import * as creators from '../../actions/action-creators'
import reducer from '../../reducers'

describe('Given a reducer', () => {
  const defaultState = {
    categories: [],
    category: {},
    clues: [],
    reveal: undefined
  }

  it('should return the defaultState when no match', () => {
    expect(reducer(defaultState, { type: 'NO_MATCH' })).to.equal(defaultState)
  })

  it('should set categories when give "SET_CATEGORIES"', () => {
    const expectedState = {
      categories,
      category: {},
      clues: [],
      reveal: undefined
    }
    expect(reducer(defaultState, creators.setCategories(categories))).to.equal(
      expectedState
    )
  })

  it('should pick a category when given "PICK_CATEGORY"', () => {
    const expectedState = {
      categories: [],
      category,
      clues: [],
      reveal: undefined
    }
    expect(reducer(defaultState, creators.pickCategory(category))).to.equal(
      expectedState
    )
  })

  it('should set clues when given "SET_CLUES"', () => {
    const expectedState = {
      categories: [],
      category: {},
      clues,
      reveal: undefined
    }
    expect(reducer(defaultState, creators.setClues(clues))).to.equal(
      expectedState
    )
  })

  it('should toggle reveal when given "REVEAL_TOGGLE"', () => {
    const expectedState = {
      categories: [],
      category: {},
      clues: [],
      reveal: id
    }
    expect(reducer(defaultState, creators.toggleReveal(id))).to.equal(
      expectedState
    )
  })
})
