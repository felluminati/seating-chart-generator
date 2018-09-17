import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

const Navbar = ({ handleClick, isLoggedIn, flipView }) => (
  <nav className="nav">
    {isLoggedIn ? (
      <Fragment>
        {/* The navbar will show these links after you log in */}
        <Link to="/" className="nav-item">
          Student View
        </Link>
        <Link to="/adminView" className="nav-item">
          Admin View
        </Link>
        <a href="#" onClick={handleClick} className="nav-item">
          Logout
        </a>
      </Fragment>
    ) : (
      <Fragment>
        {/* The navbar will show these links before you log in */}
        <Link to="/login" className="nav-item">
          Instructor Login
        </Link>
        <Link to="/" className="nav-item">
          Seating Chart
        </Link>
      </Fragment>
    )}
    <div className="nav-item" style={{marginLeft: 'auto'}}>
      <input id="flipView" className="switch" type="checkbox" onChange={flipView} />
      <label htmlFor="flipView">Flip View</label>
    </div>
  </nav>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    },
    flipView() {
      const main = document.getElementsByTagName('main')[0];
      main.classList.toggle('is-flipped');
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
