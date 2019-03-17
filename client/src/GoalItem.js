import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class GoalItem extends Component {
  delete = () => {
    this.props.deleteGoal(this.props.id)
  }

  progress = () => {
    return this.props.percentage(this.props.balance, this.props.amount)
  }

  render() {
    return (
      <tr>
        <td className="name">{this.props.name}</td>
        <td className="desktop-row">${this.props.amount}.00</td>
        <td className="desktop-row">${this.props.balance}.00</td>
        <td className="desktop-row">{this.progress()}%</td>
        <td className="mobile-row">Goal: ${this.props.amount}.00</td>
        <td className="mobile-row">Balance: ${this.props.balance}.00</td>
        <td className="mobile-row">{this.progress()}% complete</td>

        {/* <td>{this.props.date}</td> */}
        <td className="buttons-cell">
          <div className="list-buttons">
            <Link to={`/edit/${this.props.id}`} className="edit-button">
              Edit
            </Link>
            {/* <button onClick={this.goToEdit}>Edit</button> */}
            <button onClick={this.delete}>Delete</button>
            {/* <button onClick={() => this.deleteGoal(goal)}>Delete</button> */}
          </div>
        </td>
      </tr>
    )
  }
}

export default GoalItem
