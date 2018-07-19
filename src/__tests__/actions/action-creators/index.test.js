import { categories, category, clues, id } from '../../../data'
import { expect } from 'code'
import * as creators from '../../../actions/action-creators'
import * as types from '../../../actions/action-types'

const type = types.type

describe('Given the action creators', () => {
  describe('Given setCategories creator', () => {
    it('should creates an action to set categories', () => {
      const expectedAction = {
        type: type.SET_CATEGORIES,
        categories
      }
      expect(creators.setCategories(categories)).to.equal(expectedAction)
    })
  })

  describe('Given pickCategory creator', () => {
    it('should create an action to pick a category', () => {
      const expectedAction = {
        type: type.PICK_CATEGORY,
        category
      }

      expect(creators.pickCategory(category)).to.equal(expectedAction)
    })
  })

  describe('Given setClues creator', () => {
    it('should create an action to set the clues', () => {
      const expectedAction = {
        type: type.SET_CLUES,
        clues
      }
      expect(creators.setClues(clues)).to.equal(expectedAction)
    })
  })

  describe('Given toggleReveal creator', () => {
    it('should create an action to toggle reveal', () => {
      const expectedAction = {
        type: type.REVEAL_TOGGLE,
        id
      }
      expect(creators.toggleReveal(id)).to.equal(expectedAction)
    })
  })
})
