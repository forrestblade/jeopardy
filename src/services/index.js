import 'isomorphic-fetch'

export function fetchCategories () {
  return fetch('http://jservice.io/api/categories?count=20')
    .then(res => res.json())
    .catch(err => err)
}

export function fetchClues (id) {
  return fetch(`http://jservice.io/api/clues?category=${id}`)
    .then(res => res.json())
    .catch(err => undefined)
}
