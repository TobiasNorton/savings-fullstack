import React, { Component } from 'react'
import mainImage from './bjorn-snelders-1415617-unsplash.jpg'

class Welcome extends Component {
  render() {
    return (
      <div className="welcome">
        <div>
          <h1 className="title">Personal Savings Goals</h1>
          <nav className="nav-bar">
            <p>My Goals</p>
            <p>New Goal</p>
            <p>Edit Goals</p>
          </nav>
        </div>
        <section className="login-area">
          <p className="welcome-greeting">Welcome!</p>
          <p>Please Log In to Continue</p>
          <button className="login-button">Log In</button>
        </section>
      </div>
    )
  }
}

export default Welcome
