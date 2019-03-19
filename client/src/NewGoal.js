import React, { Component } from 'react'
import Header from './Header'
import axios from 'axios'
import auth from './auth'
import history from './history'

class NewGoal extends Component {
  componentWillMount() {
    if (auth.isAuthenticated()) {
      axios.defaults.headers.common = {
        Authorization: auth.authorizationHeader()
      }
    } else {
      history.push('/')
    }
  }

  createGoal = event => {
    event.preventDefault()
    let form = event.target
    let formData = new FormData(form)

    axios.post('/api/goals', formData).then(response => {
      history.push('/goals')
    })
  }

  render() {
    return (
      <div>
        <Header />
        <section>
          <p className="form-header">Create a New Goal</p>
          <form onSubmit={this.createGoal}>
            <div className="input-container">
              <label>Goal Name</label>
              <input type="text" name="goal[name]" maxLength="20" autoComplete="off" />
            </div>
            <div className="input-container">
              <label>Amount</label>
              <input type="number" name="goal[target_amount]" min="1" max="999999" />
            </div>
            <div className="input-container">
              <label>Initial Deposit</label>
              <input className="balance" type="number" name="goal[balance]" min="1" max="999999" />
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

export default NewGoal
