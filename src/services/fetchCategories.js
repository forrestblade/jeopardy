import 'isomorphic-fetch'

export default function fetchCategories () {
  return fetch('http://jservice.io/api/categories?count=20')
    .then(res => res.json())
    .catch(err => err)
}
