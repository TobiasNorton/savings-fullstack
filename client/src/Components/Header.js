import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import auth from '../auth'
import axios from 'axios'

class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      goals: []
    }
  }

  componentWillMount() {
    if (auth.isAuthenticated()) {
      axios.defaults.headers.common = {
        Authorization: auth.authorizationHeader()
      }
    }
  }

  render() {
    return (
      <div>
        <h1 className="title">
          GreenGoals <i className="fas fa-money-bill-wave" />
        </h1>
        <nav className="nav-bar">
          <Link to="/goals" className="nav-link">
            My Goals
          </Link>
          <Link to="/new" className="nav-link">
            New Goal
          </Link>
          <Link to="/choose" className="nav-link">
            Edit Goals
          </Link>
          <Link to="/logout" className="nav-link">
            Sign Out
          </Link>
        </nav>
      </div>
    )
  }
}

export default Header
