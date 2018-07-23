import { categories, category, clues, id } from '../../../testData'
import { expect } from 'code'
import * as creators from '../../../actions/action-creators'
import types from '../../../actions/action-types'

describe('Given the action creators', () => {
  describe('Given setCategories creator', () => {
    it('should creates an action to set categories', () => {
      const expectedAction = {
        type: types.SET_CATEGORIES,
        categories
      }
      expect(creators.setCategories(categories)).to.equal(expectedAction)
    })
  })

  describe('Given pickCategory creator', () => {
    it('should create an action to pick a category', () => {
      const expectedAction = {
        type: types.PICK_CATEGORY,
        category
      }

      expect(creators.pickCategory(category)).to.equal(expectedAction)
    })
  })

  describe('Given setClues creator', () => {
    it('should create an action to set the clues', () => {
      const expectedAction = {
        type: types.SET_CLUES,
        clues
      }
      expect(creators.setClues(clues)).to.equal(expectedAction)
    })
  })

  describe('Given toggleReveal creator', () => {
    it('should create an action to toggle reveal', () => {
      const expectedAction = {
        type: types.REVEAL_TOGGLE,
        id
      }
      expect(creators.toggleReveal(id)).to.equal(expectedAction)
    })
  })
})
