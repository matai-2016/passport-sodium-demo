import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchQuote, fetchSecretQuote } from '../actions'
import Navbar from '../components/Navbar'
import Quotes from '../components/Quotes'

class App extends Component {
  render() {
    const { dispatch, quote, authenticated, user, id } = this.props
    return (
      <div>
        <Navbar
          isAuthenticated={authenticated}
          dispatch={dispatch}
        />
        <div className='container'>
          <Quotes
            onQuoteClick={() => dispatch(fetchQuote())}
            onSecretQuoteClick={() => dispatch(fetchSecretQuote())}
            isAuthenticated={authenticated}
            quote={quote}
          />
        </div>
      </div>
    )
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  quote: PropTypes.string,
  authenticated: PropTypes.bool,
  username: PropTypes.string,
  id: PropTypes.number
}

// These props come from the application's
// state when it is started
function mapStateToProps(state) {

  const { quote, auth } = state
  const { authenticated, username, id } = auth

  return {
    quote,
    authenticated,
    username,
    id
  }
}

export default connect(mapStateToProps)(App)