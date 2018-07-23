import { Link } from 'react-router-dom'
import Clue from '../Clue/index.connected'
import { withRouter } from 'react-router'
import { fetchClues } from '../../services/'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

const shouldDisplayLoading = props => {
  if (props.clues.length === 0 || props.clues === false) return true
}

const generateClues = props => {
  return props.clues.map(clue => {
    return <Clue key={clue.id} clue={clue} />
  })
}

export class Category extends Component {
  componentDidMount = () => {
    fetchClues(this.props.category.id).then(data => {
      return data === undefined
        ? this.props.history.push('/')
        : this.props.setClues(data)
    })
  }

  render() {
    return (
      <main className="Category">
        <Link className="link-home" to="/">
          <h4>Home</h4>
        </Link>
        <h2>{this.props.category.title}</h2>
        {shouldDisplayLoading(this.props) ? (
          <h1>Loading...</h1>
        ) : (
          generateClues(this.props)
        )}
      </main>
    )
  }
}

Category.defaultProps = {
  clues: [],
  category: ''
}

Category.propTypes = {
  clues: PropTypes.array,
  category: PropTypes.object,
  setClues: PropTypes.func
}

export default withRouter(Category)
