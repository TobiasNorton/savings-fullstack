import React, { Component } from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'

class ChooseGoal extends Component {
  constructor(props) {
    super(props)

    this.state = {
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

  showGoals = () => {
    return this.state.goals.map((goal, index) => {
      return (
        <Link to="/edit/:id" className="edit-list-item">
          {goal.goalName}
        </Link>
      )
    })
  }

  render() {
    return (
      <>
        <Header />
        <p className="header">Choose a Goal to Edit</p>
        <div className="edit-goals-container">{this.showGoals()}</div>
      </>
    )
  }
}

export default ChooseGoal
