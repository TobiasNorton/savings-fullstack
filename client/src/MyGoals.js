import React, { Component } from 'react'
import data from './goals.json'
import Header from './Header'
import GoalItem from './GoalItem'
import { Link } from 'react-router-dom'
import axios from 'axios'

class MyGoals extends Component {
  constructor(props) {
    super(props)

    this.state = {
      goals: [
        // {
        //   goalName: 'Gibson Les Paul',
        //   goalAmount: 4500,
        //   balance: 600,
        //   deadline: 'September 10, 2019'
        // },
        // {
        //   goalName: 'New Backpack',
        //   goalAmount: 600,
        //   balance: 0,
        //   deadline: 'August 15, 2019'
        // },
        // {
        //   goalName: 'Fender Telecaster',
        //   goalAmount: 1500,
        //   balance: 200,
        //   deadline: 'December 15, 2019'
        // },
        // {
        //   goalName: 'Thailand, Cambodia',
        //   goalAmount: 4500,
        //   balance: 500,
        //   deadline: 'January 20, 2020'
        // },
        // {
        //   goalName: 'Scotland, Ireland, UK',
        //   goalAmount: 6000,
        //   balance: 1250,
        //   deadline: 'April 14, 2020'
        // },
        // {
        //   goalName: 'Fender Stratocaster',
        //   goalAmount: 1800,
        //   balance: 3,
        //   deadline: 'November 17, 2019'
        // }
      ]
    }
  }

  componentDidMount = () => {
    axios.get('/api/goals').then(response => {
      console.log(response.data)
      this.setState(
        {
          goals: response.data
        },
        () => console.log(this.state.goals)
      )
    })
  }

  goToEdit = () => {
    window.location = '/edit/:id'
  }

  deleteGoal = event => {
    console.log(event.target)
    // axios.delete(`/api/goal/${this.state.goals}`).then(response => {
    // })
  }

  displayGoals = () => {
    return this.state.goals.map((goal, index) => {
      return (
        <GoalItem
          key={index}
          id={goal.id}
          name={goal.name}
          amount={goal.target_amount}
          balance={goal.balance}
          date={goal.due_date}
        />
        // <tr className="row" key={index}>
        //   <td>{goal.name}</td>
        //   <td>{goal.target_amount}</td>
        //   <td>{goal.balance}</td>
        //   <td>{goal.due_date}</td>
        //   <td className="hide-cell">
        //     <div className="list-buttons">
        //       <Link to="/edit/:id" className="edit-button">
        //         Edit
        //       </Link>
        //       {/* <button onClick={this.goToEdit}>Edit</button> */}
        //       <button onClick={this.deleteGoal}>Delete</button>
        //       {/* <button onClick={() => this.deleteGoal(goal)}>Delete</button> */}
        //     </div>
        //   </td>
        // </tr>
      )
    })
  }

  noGoalsToDisplay = () => {
    if (this.state.goals.length === 0) {
      return (
        <>
          <p>You have no current goals.</p>
        </>
      )
    }
  }

  // goalName = () => {
  //   return this.state.goals.map((goal, index) => {
  //     return (
  //       <div>
  //         <p>{goal.goalName}</p>
  //       </div>
  //     )
  //   })
  // }

  render() {
    return (
      <div className="my-goals">
        {/* <h1 className="title">Personal Savings Goals</h1>
        <nav className="nav-bar">
          <p>My Goals</p>
          <p>New Goal</p>
          <p>Edit Goals</p>
        </nav> */}
        <Header />
        <section className="goals-list">
          <p className="header">My Goals</p>
          <table className="table">
            <thead>
              <tr className="test">
                <th>Goal</th>
                <th>Amount</th>
                <th>Current Balance</th>
                <th>Deadline</th>
              </tr>
            </thead>

            <tbody>{this.displayGoals()}</tbody>
          </table>
          {this.noGoalsToDisplay()}
          {/* <button className="create-new">Create New Goal</button> */}
          <Link to="/new" className="create-new">
            Create New Goal
          </Link>
          {/* <div className="list-container">
            <div>
              <p>Goal</p>
              {this.goalName()}
            </div>
            <div>
              <p>Amount</p>
              {this.goalAmount()}
            </div>
            <div>
              <p>Current Balance</p>
              {this.balance()}
            </div>
            <div>
              <p>Date</p>
              {this.deadline()}
            </div>
          </div> */}
        </section>
      </div>
    )
  }
}

export default MyGoals
