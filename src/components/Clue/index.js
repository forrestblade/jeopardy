import { connect } from 'react-redux'
import { toggleReveal } from '../../actions/action-creators'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class Clue extends Component {
  render () {
    const { answer, question, value } = this.props.clue
    return (
      <main
        className="clue"
        onClick={() => this.props.toggleReveal(this.props.clue.id)}
      >
        <h4>{value || 'unknown'}</h4>
        <hr />
        <h5>{question}</h5>
        <hr />
        {this.props.reveal === this.props.clue.id ? (
          <h6>{answer}</h6>
        ) : (
          <span />
        )}
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
  clue: PropTypes.object,
  toggleReveal: PropTypes.func
}


const mapStateToProps = state => {
  return {
    reveal: state.reveal
  }
}

export default connect(mapStateToProps, { toggleReveal })(Clue)
