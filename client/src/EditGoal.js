import React, { Component } from 'react'
import Header from './Header'
import axios from 'axios'
import auth from './auth'
import history from './history'

class EditGoal extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentGoal: {}
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
    axios.get(`/api/goals/${this.props.match.params.id}`).then(response => {
      this.setState(
        {
          currentGoal: response.data
        },
        () => console.log(this.state.currentGoal)
      )
    })
  }

  editGoal = event => {
    event.preventDefault()
    let formData = new FormData(event.target)
    for (let pair of formData.entries()) {
      console.log(pair[0] + ', ' + pair[1])
    }

    axios.put(`/api/goals/${this.state.currentGoal.id}`, formData).then(response => {
      window.location = '/goals'
    })
  }

  render() {
    return (
      <div>
        <Header />

        <section>
          {/* <p className="header">Edit Your Goal</p> */}
          <p className="form-header">Edit Your Goal</p>
          <form className="new-goal" onSubmit={this.editGoal}>
            <div className="input-container">
              <label>Goal Name</label>
              <input
                type="text"
                name="goal[name]"
                defaultValue={this.state.currentGoal.name}
                maxLength="20"
                autoComplete="off"
              />
            </div>
            <div className="input-container">
              <label>Amount</label>
              <input
                type="number"
                name="goal[target_amount]"
                defaultValue={this.state.currentGoal.target_amount}
              />
            </div>
            <div className="input-container">
              <label>Update Balance</label>
              <input
                className="balance"
                type="number"
                name="goal[balance]"
                defaultValue={this.state.currentGoal.balance}
              />
            </div>
            {/* <div className="input-container">
              <label>Deadline</label>
              <input
                type="date"
                name="goal[due_date]"
                defaultValue={this.state.currentGoal.due_date}
              />
            </div> */}
            <button type="submit" className="submit">
              Submit
            </button>
          </form>
        </section>
      </div>
    )
  }
}

export default EditGoal
