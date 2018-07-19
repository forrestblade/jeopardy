import 'isomorphic-fetch'

export default function fetchClues (id) {
  return fetch(`http://jservice.io/api/clues?category=${id}`)
    .then(res => res.json())
    .catch(err => err)
}
