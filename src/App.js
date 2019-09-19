import React, { Component } from 'react'
import Home from './components/Home/Home'
import Login from './components/Home/login/login'
import Tdashboard from './components/dashboard/TeacherDashboard'
import Sdashboard from './components/dashboard/StudentDashboard'
import ClassActivity from './components/dashboard/TeacherDashboard/classActivitySection/classActivities'
import StudentActivity from './components/dashboard/StudentDashboard/StudentActivities'

class App extends Component {
  render() {
    
    return (
      <div>
                   {/* <Home />             */}
                 {/* <Login />           */}
                        {/* <Tdashboard />                */}
                      {/* <ClassActivity />               */}
                      {/* <Sdashboard />    */}
                        <StudentActivity />  
                
      </div>
    )
  }
}

export default App;
