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
      goals: [],
      lastRow: false
    }
  }

  componentDidMount = () => {
    // axios.get('/api/goals').then(response => {
    //   console.log(response.data)
    //   this.setState(
    //     {
    //       goals: response.data
    //     },
    //     () => console.log(this.state.goals)
    //   )
    // })
    this.loadGoals()
  }

  loadGoals = () => {
    axios.get('/api/goals').then(response => {
      this.setState({
        goals: response.data
      })
    })
  }

  goToEdit = () => {
    window.location = '/edit/:id'
  }

  lastRow = () => {
    return this.state.goals.filter
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
          deleteGoal={this.deleteGoal}
          className={this.lastRow}
        />
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

  deleteGoal = id => {
    axios.delete(`/api/goals/${id}`).then(response => {
      this.loadGoals()
    })
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
                <th className="top-left">Goal</th>
                <th>Amount</th>
                <th>Current Balance</th>
                <th className="top-right" />
              </tr>
            </thead>

            <tbody>{this.displayGoals()}</tbody>
            <tfoot />
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
