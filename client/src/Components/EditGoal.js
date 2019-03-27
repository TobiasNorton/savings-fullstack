import React, { Component } from 'react'
import Header from './Header'
import axios from 'axios'
import auth from '../auth'
import history from '../history'

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
      this.setState({
        currentGoal: response.data
      })
    })
  }

  editGoal = event => {
    event.preventDefault()
    let formData = new FormData(event.target)

    axios.put(`/api/goals/${this.state.currentGoal.id}`, formData).then(response => {
      history.push('/goals')
    })
  }

  render() {
    return (
      <div>
        <Header />

        <section>
          <p className="form-header">Edit Your Goal</p>
          <form onSubmit={this.editGoal}>
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
                min="1"
                max="999999"
                defaultValue={this.state.currentGoal.target_amount}
              />
            </div>
            <div className="input-container">
              <label>Update Balance</label>
              <input
                className="balance"
                type="number"
                name="goal[balance]"
                min="1"
                max="999999"
                defaultValue={this.state.currentGoal.balance}
              />
            </div>
            <button type="submit" className="submit">
              Submit
            </button>
          </form>
        </section>
        <footer className="fixed">© GreenGoals 2019</footer>
      </div>
    )
  }
}

export default EditGoal
