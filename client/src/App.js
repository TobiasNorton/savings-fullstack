import React, { Component } from 'react'
import './App.css'
import { Router, Route } from 'react-router-dom'
import Welcome from './Welcome'
// import Home from './Home'
import NewGoal from './NewGoal'
import MyGoals from './MyGoals'
import EditGoal from './EditGoal'
import ChooseGoal from './ChooseGoal'

import auth from './auth'
import history from './history'

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <>
          <Route path="/login" render={() => auth.login()} />
          <Route
            path="/logout"
            render={() => {
              auth.logout()
              return <></>
            }}
          />
          <Route
            path="/callback"
            render={() => {
              auth.handleAuthentication(() => {
                // NOTE: Uncomment the following lines if you are using axios
                //
                // Set the axios authentication headers
                // axios.defaults.headers.common = {
                //   Authorization: auth.authorizationHeader()
                // }
              })
              return <></>
            }}
          />

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
