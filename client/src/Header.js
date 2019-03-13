import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      dropdown: false,
      //data
      goals: [
        {
          goalName: 'Gibson Les Paul',
          goalAmount: 4500,
          balance: 600,
          deadline: 'September 10, 2019'
        },
        {
          goalName: 'New Backpack',
          goalAmount: 600,
          balance: 0,
          deadline: 'August 15, 2019'
        },
        {
          goalName: 'Fender Telecaster',
          goalAmount: 1500,
          balance: 200,
          deadline: 'December 15, 2019'
        },
        {
          goalName: 'Thailand, Cambodia',
          goalAmount: 4500,
          balance: 500,
          deadline: 'January 20, 2020'
        },
        {
          goalName: 'Scotland, Ireland, UK',
          goalAmount: 6000,
          balance: 1250,
          deadline: 'April 14, 2020'
        },
        {
          goalName: 'Fender Stratocaster',
          goalAmount: 1800,
          balance: 3,
          deadline: 'November 17, 2019'
        }
      ]
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
        <h1 className="title">Personal Savings Goals</h1>
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
