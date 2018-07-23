import { toggleReveal } from '../../actions/action-creators'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

const revealAnswer = props => {
  return props.reveal === props.clue.id ? (
    <h6>{props.clue.answer}</h6>
  ) : (
    <span />
  )
}

export default class Clue extends Component {
  render () {
    const { question, value } = this.props.clue
    return (
      <main
        className="clue"
        onClick={() => this.props.toggleReveal(this.props.clue.id)}
      >
        <h4>{value || 'unknown'}</h4>
        <hr />
        <h5>{question}</h5>
        <hr />
        {revealAnswer(this.props)}
      </main>
    )
  }
}

Clue.defaultProps = {
  clue: {},
  toggleReveal
}

Clue.propTypes = {
  key: PropTypes.number,
  clue: PropTypes.shape({
    id: PropTypes.number,
    question: PropTypes.string,
    answer: PropTypes.string,
    value: PropTypes.number
  }),
  toggleReveal: PropTypes.func
}
