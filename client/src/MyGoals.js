import React, { Component } from 'react'
import Header from './Header'
import GoalItem from './GoalItem'
import { Link } from 'react-router-dom'
import axios from 'axios'
import auth from './auth'
import history from './history'

class MyGoals extends Component {
  constructor(props) {
    super(props)

    this.state = {
      goals: []
    }
  }

  componentWillMount() {
    if (auth.isAuthenticated()) {
      axios.defaults.headers.common = {
        Authorization: auth.authorizationHeader()
      }
    } else {
      history.push('/')
    }
  }

  componentDidMount = () => {
    this.loadGoals()
  }

  percentage = (balance, amount) => {
    let float = balance / amount
    return `${float.toFixed(2) * 100}`
  }

  loadGoals = () => {
    axios.get('/api/goals').then(response => {
      this.setState({
        goals: response.data
      })
    })
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
          percentage={this.percentage}
        />
      )
    })
  }

  noGoalsToDisplay = () => {
    if (this.state.goals.length === 0) {
      return (
        <>
          <div className="no-goals">You have no current goals.</div>
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

  renderLoading = () => {
    return <div className="no-goals">Loading...</div>
  }

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
                <th>%</th>
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
