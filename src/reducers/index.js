import type from '../actions/action-types'

const defaultState = {
  categories: [],
  category: {},
  clues: [],
  reveal: undefined
}

function categories (state = defaultState, action) {
  return {
    ...state,
    categories: action.categories
  }
}

function category (state = defaultState, action) {
  return {
    ...state,
    category: action.category
  }
}

function clues (state = defaultState, action) {
  return {
    ...state,
    clues: action.clues
  }
}

function reveal (state = defaultState, action) {
  return {
    ...state,
    reveal: state.reveal === undefined ? action.id : undefined
  }
}

export default (state = defaultState, action) => {
  const actionsHandler = {
    [type.SET_CATEGORIES]: categories,
    [type.PICK_CATEGORY]: category,
    [type.SET_CLUES]: clues,
    [type.REVEAL_TOGGLE]: reveal
  }

  const reducer = actionsHandler[action.type]

  return reducer ? reducer(state, action) : state
}
