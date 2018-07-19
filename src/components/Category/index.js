import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { setClues } from '../../actions/action-creators'
import Clue from '../Clue'
import fetchClues from '../../services/fetchClues'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class Category extends Component {
  componentDidMount = () => {
    fetchClues(this.props.category.id).then(data => this.props.setClues(data))
  }

  render() {
    return (
      <main className="Category">
        <Link className="link-home" to="/">
          <h4>Home</h4>
        </Link>
        <h2>{this.props.category.title}</h2>
        {this.props.clues ? (
          this.props.clues.map(clue => {
            return <Clue key={clue.id} clue={clue} />
          })
        ) : (
          <span />
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

function mapStateToProps(state) {
  return {
    clues: state.clues,
    category: state.category
  }
}

export default connect(mapStateToProps, { setClues })(Category)
