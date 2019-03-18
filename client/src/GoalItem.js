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
        <td className="desktop-cell">${this.props.amount}.00</td>
        <td className="desktop-cell">${this.props.balance}.00</td>
        <td className="desktop-cell">{this.progress()}%</td>
        <td className="mobile-cell">Goal: ${this.props.amount}.00</td>
        <td className="mobile-cell">Balance: ${this.props.balance}.00</td>
        <td className="mobile-cell">{this.progress()}% complete</td>

        <td className="buttons-cell">
          <div className="list-buttons">
            <Link to={`/edit/${this.props.id}`} className="edit-button">
              Edit
            </Link>
            <button onClick={this.delete}>Delete</button>
          </div>
        </td>
      </tr>
    )
  }
}

export default GoalItem
