import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class GoalItem extends Component {
  render() {
    return (
      <tr className="row">
        <td>{this.props.name}</td>
        <td>{this.props.amount}</td>
        <td>{this.props.balance}</td>
        <td>{this.props.date}</td>
        <td className="hide-cell">
          <div className="list-buttons">
            <Link to={`/edit/${this.props.id}`} className="edit-button">
              Edit
            </Link>
            {/* <button onClick={this.goToEdit}>Edit</button> */}
            <button onClick={this.deleteGoal}>Delete</button>
            {/* <button onClick={() => this.deleteGoal(goal)}>Delete</button> */}
          </div>
        </td>
      </tr>
    )
  }
}

export default GoalItem
