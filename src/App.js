import React, { Component } from 'react'
import Home from './components/Home/Home'
import Login from './components/Home/login/login'
import Tdashboard from './components/dashboard/TeacherDashboard'
import Sdashboard from './components/dashboard/StudentDashboard'
import ClassActivity from './components/dashboard/TeacherDashboard/classActivitySection/classActivities'
import StudentActivity from './components/dashboard/StudentDashboard/StudentActivities'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import requireAuth from './utils/requireAuth';

class App extends Component {
  render() {
    return (
      <Router >
        <div>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/login' component={Login} />
            <Route path='/teacherDashboard' component={ requireAuth(Tdashboard) } />
            <Route path='/studentDashboard' component={Sdashboard} />
            <Route path='/teacherDashboard/classactivity' component={ClassActivity} />
            <Route path='/studentDashboard/classactivity'component={StudentActivity} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
 