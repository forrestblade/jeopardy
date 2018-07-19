import * as types from '../action-types'

const type = types.type

export function setCategories (categories) {
  return {
    type: type.SET_CATEGORIES,
    categories
  }
}

export function pickCategory (category) {
  return {
    type: type.PICK_CATEGORY,
    category
  }
}

export function setClues (clues) {
  return {
    type: type.SET_CLUES,
    clues
  }
}

export function toggleReveal (id) {
  return {
    type: type.REVEAL_TOGGLE,
    id
  }
}
