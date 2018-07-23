import Clue from './'
import { connect } from 'react-redux'
import { toggleReveal } from '../../actions/action-creators'

const mapStateToProps = state => {
  return {
    reveal: state.reveal
  }
}

export default connect(mapStateToProps, { toggleReveal })(Clue)
