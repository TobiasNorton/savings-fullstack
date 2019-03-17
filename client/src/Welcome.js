import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Welcome extends Component {
  render() {
    return (
      <div className="welcome">
        <div>
          <h1 className="title landing">
            GreenGoals <i className="fas fa-money-bill-wave" />
          </h1>
          {/* <nav className="nav-bar">
            <p>My Goals</p>
            <p>New Goal</p>
            <p>Edit Goals</p>
          </nav> */}
        </div>
        <section className="login-area">
          <p className="tagline">Dream Big. Save Now.</p>
          <p className="please-login">Please Log In or Sign Up to Continue</p>
          <div>
            {/* <button>Log In</button>
            <button>Sign Up</button> */}
            <div className="login-buttons-container">
              <Link to="/login" className="login-button">
                Log In
              </Link>
              <Link to="/login" className="login-button">
                Sign Up
              </Link>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Welcome
