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
      goals: [],
      isLoading: true
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
    return `${Math.floor(float.toFixed(2) * 100)}`
  }

  loadGoals = () => {
    axios.get('/api/goals').then(response => {
      this.setState({
        goals: response.data,
        isLoading: false
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
    if (this.state.goals.length === 0 && !this.state.isLoading) {
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

  render() {
    if (this.state.isLoading) {
      return (
        <>
          <Header />
          <div className="sk-circle">
            <div className="sk-circle1 sk-child" />
            <div className="sk-circle2 sk-child" />
            <div className="sk-circle3 sk-child" />
            <div className="sk-circle4 sk-child" />
            <div className="sk-circle5 sk-child" />
            <div className="sk-circle6 sk-child" />
            <div className="sk-circle7 sk-child" />
            <div className="sk-circle8 sk-child" />
            <div className="sk-circle9 sk-child" />
            <div className="sk-circle10 sk-child" />
            <div className="sk-circle11 sk-child" />
            <div className="sk-circle12 sk-child" />
          </div>
        </>
      )
    }
    return (
      <div>
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
          <Link to="/new" className="create-new">
            Create New Goal
          </Link>
        </section>
        <footer>GreenGoals © 2019</footer>
      </div>
    )
  }
}

export default MyGoals
