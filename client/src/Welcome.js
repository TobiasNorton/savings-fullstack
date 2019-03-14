import React, { Component } from 'react'

class Welcome extends Component {
  render() {
    return (
      <div className="welcome">
        <div>
          <h1 className="title">
            StashFlow <i class="fas fa-money-bill-wave" />
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
            <button>Log In</button>
            <button>Sign Up</button>
          </div>
        </section>
      </div>
    )
  }
}

export default Welcome
