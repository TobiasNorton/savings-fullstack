import React, { Component } from 'react'

class Welcome extends Component {
  render() {
    return (
      <div className="welcome">
        <div>
          <h1 className="title">Personal Savings Goals</h1>
          {/* <nav className="nav-bar">
            <p>My Goals</p>
            <p>New Goal</p>
            <p>Edit Goals</p>
          </nav> */}
        </div>
        <section className="login-area">
          <p className="welcome-greeting">Dream Big. Save Now.</p>
          <p>Please Log In or Sign Up to Continue</p>
          <div>
            <button className="login-button">Log In</button>
            <button className="login-button">Sign Up</button>
          </div>
        </section>
      </div>
    )
  }
}

export default Welcome
