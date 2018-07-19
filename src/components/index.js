import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { setCategories, pickCategory } from '../actions/action-creators'
import fetchCategories from '../services/fetchCategories'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import './styles/index.css'

export class App extends Component {
  componentDidMount = () => {
    fetchCategories().then(data => this.props.setCategories(data))
  }

  render() {
    return (
      <main className="App">
        <h2>Jeopardy!</h2>
        {this.props.categories.map(category => {
          return (
            <div key={category.id}>
              <Link
                to="/category"
                onClick={() => this.props.pickCategory(category)}
              >
                <h4>{category.title}</h4>
              </Link>
            </div>
          )
        })}
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

function mapStateToProps(state) {
  return { categories: state.categories }
}

export default connect(mapStateToProps, { setCategories, pickCategory })(App)
