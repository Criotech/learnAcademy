import React, { Component } from 'react'
import Home from './components/Home/Home'
import Login from './components/Home/login/login'
import Tdashboard from './components/dashboard/TeacherDashboard'
import Sdashboard from './components/dashboard/StudentDashboard'
import ClassActivity from './components/dashboard/TeacherDashboard/classActivitySection/classActivities'
import StudentActivity from './components/dashboard/StudentDashboard/StudentActivities'
import TestIntro from './components/testsection'
// import Thanks from './components/testsection/thanks'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import requireAuth from './utils/requireAuth';

class App extends Component {
  render() {
    return (
      <Router >
        <div>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/login' component={Login} />
            <Route path='/teacherDashboard' component={ requireAuth(Tdashboard) } />
            <Route path='/studentDashboard' component={ requireAuth(Sdashboard) } />
            <Route path='/teacherclassactivity/:classId' component={ requireAuth(ClassActivity) } />
            <Route path='/studentclassactivity/:classId' component={ requireAuth(StudentActivity) } />
            <Route path='/test/:classId' component={ requireAuth(TestIntro) } />
             {/* <Route path='/thanks' component={ requireAuth(Thanks) } />  */}
                        
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
 