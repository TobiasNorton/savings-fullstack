import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class GoalItem extends Component {
  delete = () => {
    this.props.deleteGoal(this.props.id)
  }

  render() {
    return (
      <tr className="row">
        <td>{this.props.name}</td>
        <td>${this.props.amount}.00</td>
        <td>${this.props.balance}.00</td>
        <td>{this.props.date}</td>
        <td className="hide-cell">
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
