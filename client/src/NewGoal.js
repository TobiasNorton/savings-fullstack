import React, { Component } from 'react'
import Header from './Header'
import axios from 'axios'

class NewGoal extends Component {
  createGoal = event => {
    event.preventDefault()
    let form = event.target
    let formData = new FormData(form)
    for (let pair of formData.entries()) {
      console.log(pair[0] + ', ' + pair[1])
    }

    axios.post('/api/goals', formData).then(response => {
      form.reset()
    })

    window.location = '/goals'
  }

  render() {
    return (
      <div>
        <Header />
        <section>
          {/* <p className="header">Create a New Goal</p> */}
          <p className="form-header">Create a New Goal</p>
          <form className="new-goal" onSubmit={this.createGoal}>
            <div className="input-container">
              <label>Goal Name</label>
              <input type="text" name="goal[name]" maxLength="22" autoComplete="off" />
            </div>
            <div className="input-container">
              <label>Amount</label>
              {/* <div className="currency">
                <p>$</p>
                <input type="number" name="goal[target_amount]" min="1" max="9999999" />
                <p>.00</p>
              </div> */}
              <input type="number" name="goal[target_amount]" min="1" max="9999999" />
            </div>
            <div className="input-container">
              <label>Initial Deposit</label>
              <input type="number" name="goal[balance]" min="1" max="9999999" />
            </div>
            {/* <div className="input-container">
              <label>Deadline</label>
              <input type="date" name="goal[due_date]" />
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

export default NewGoal
