import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Welcome from './Welcome'
// import Home from './Home'
import NewGoal from './NewGoal'
import MyGoals from './MyGoals'
import EditGoal from './EditGoal'
import ChooseGoal from './ChooseGoal'

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/goals" component={MyGoals} />
          <Route exact path="/new" component={NewGoal} />
          <Route exact path="/edit/:id" component={EditGoal} />
          <Route exact path="/choose" component={ChooseGoal} />
        </>
      </Router>
    )
  }
}

export default App
