import React, { Component } from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'
import axios from 'axios'
import auth from './auth'
import history from './history'

class ChooseGoal extends Component {
  constructor(props) {
    super(props)

    this.state = {
      goals: [],
      loading: true
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
    axios.get(`/api/goals`).then(response => {
      this.setState({
        goals: response.data,
        loading: false
      })
    })
  }

  showGoals = () => {
    if (this.state.goals.length !== 0) {
      return this.state.goals.map((goal, index) => {
        return (
          <Link to={`/edit/${goal.id}`} key={index} className="edit-list-item">
            {goal.name} - ${goal.target_amount}.00
          </Link>
        )
      })
    } else if (this.state.goals.length === 0 && !this.state.loading) {
      return (
        <>
          <p>You have no current goals.</p>
          <Link to="/new" className="create-new">
            Create New Goal
          </Link>
        </>
      )
    }
  }

  loading = () => {
    if (this.state.loading) {
      return (
        <div class="sk-circle">
          <div class="sk-circle1 sk-child" />
          <div class="sk-circle2 sk-child" />
          <div class="sk-circle3 sk-child" />
          <div class="sk-circle4 sk-child" />
          <div class="sk-circle5 sk-child" />
          <div class="sk-circle6 sk-child" />
          <div class="sk-circle7 sk-child" />
          <div class="sk-circle8 sk-child" />
          <div class="sk-circle9 sk-child" />
          <div class="sk-circle10 sk-child" />
          <div class="sk-circle11 sk-child" />
          <div class="sk-circle12 sk-child" />
        </div>
      )
    }
  }

  render() {
    return (
      <>
        <Header />
        <p className="header">{!this.state.loading ? 'Choose a Goal to Edit' : ''}</p>
        <div>{this.loading()}</div>
        <div className="edit-goals-container">{this.showGoals()}</div>
      </>
    )
  }
}

export default ChooseGoal
