import React, { Component } from 'react'
import Home from './components/Home/Home'
import Login from './components/Home/login/login'
import Tdashboard from './components/dashboard/TeacherDashboard'
import ClassActivity from './components/dashboard/TeacherDashboard/classActivitySection/classActivities'

class App extends Component {
  render() {
    
    return (
      <div>
                  {/* <Home />            */}
                {/* <Login />          */}
                    <Tdashboard />           
                 {/* <ClassActivity />          */}
                
      </div>
    )
  }
}

export default App;
