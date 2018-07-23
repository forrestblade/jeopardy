import { Link } from 'react-router-dom'
import { setCategories, pickCategory } from '../actions/action-creators'
import { fetchCategories } from '../services/'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import './styles/index.css'

const renderCategories = props => {
  return props.categories.map(category => {
    return (
      <div key={category.id}>
        <Link to="/category" onClick={() => props.pickCategory(category)}>
          <h4>{category.title}</h4>
        </Link>
      </div>
    )
  })
}

export default class App extends Component {
  componentDidMount = () => {
    fetchCategories().then(data => this.props.setCategories(data))
  }

  render() {
    return (
      <main className="App">
        <h2>Jeopardy!</h2>
        {renderCategories(this.props)}
      </main>
    )
  }
}

App.defaultProps = {
  categories: [],
  pickCategory,
  setCategories
}

App.propTypes = {
  categories: PropTypes.array,
  setCategories: PropTypes.func,
  pickCategory: PropTypes.func
}
