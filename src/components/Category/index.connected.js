import Category from './'
import { connect } from 'react-redux'
import { setClues } from '../../actions/action-creators'

function mapStateToProps (state) {
  return {
    clues: state.clues,
    category: state.category
  }
}

export default connect(mapStateToProps, { setClues })(Category)
