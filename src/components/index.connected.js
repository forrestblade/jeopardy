import { connect } from 'react-redux'
import { setCategories, pickCategory } from '../actions/action-creators'
import App from './'

function mapStateToProps (state) {
  return { categories: state.categories }
}

export default connect(mapStateToProps, { setCategories, pickCategory })(App)
