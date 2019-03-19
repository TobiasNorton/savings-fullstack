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
        </div>
        <section className="login-area">
          <p className="tagline">Dream Big. Save Now.</p>
          <p className="please-login">Please Log In or Sign Up to Continue</p>
          <div>
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
        <footer className="welcome-fixed hidden">© GreenGoals 2019</footer>
      </div>
    )
  }
}

export default Welcome
