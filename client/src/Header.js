import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      dropdown: false,
      //data
      goals: []
    }
  }

  callDropdown = () => {
    if (!this.state.dropdown) {
      this.setState({
        dropdown: true
      })
    } else {
      this.setState({
        dropdown: false
      })
    }
    console.log(this.state.dropdown)
  }

  dropdown = () => {
    if (this.state.dropdown === true) {
      return (
        <div className="dropdown">
          {this.state.goals.map((goal, index) => {
            return (
              <Link to="/edit/:id" className="dropdown-item" key={index}>
                {goal.goalName}
              </Link>
            )
          })}
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        <h1 className="title">StashFlow</h1>
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
          {/* <button className="nav-link" onClick={this.callDropdown}>
            Edit Goals
          </button> */}
        </nav>
        {/* {this.dropdown()} */}
      </div>
    )
  }
}

export default Header
