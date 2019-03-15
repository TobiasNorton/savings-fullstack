import React, { Component } from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'
import axios from 'axios'
import auth from './auth'

class ChooseGoal extends Component {
  constructor(props) {
    super(props)

    this.state = {
      //data
      goals: []
    }
  }

  componentWillMount() {
    if (auth.isAuthenticated()) {
      axios.defaults.headers.common = {
        Authorization: auth.authorizationHeader()
      }
    }
  }

  componentDidMount = () => {
    axios.get(`/api/goals`).then(response => {
      this.setState({
        goals: response.data
      })
    })
  }

  showGoals = () => {
    return this.state.goals.map((goal, index) => {
      return (
        <Link to={`/edit/${goal.id}`} key={index} className="edit-list-item">
          {goal.name} - ${goal.target_amount}.00
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
