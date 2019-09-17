import React, { Component } from 'react'
import './teacherDashboard.css'
import ClassList from './classList'
import StudentList from './studentList'
import Theader from './Theader.js'

export default class Tdashboard extends Component {
    state = {
        class: true
    }

    onPageClass() {
        this.setState({
            class: true
        })
    } 

    onPageStudents() {
        this.setState({
            class: false
        })
    }

    renderPage(){
         if (this.state.class) {
            return <ClassList /> 
        } else {
            return <StudentList />
        } 
    }

    render() {                     
        return (
            <div>
                <Theader />

                {/* papper section */}
                <section className="paper" style={{paddingLeft: 150}}>
                    <button className= {(this.state.class)?'navActive paperChild':'paperChild'} onClick={this.onPageClass.bind(this)} >
                        Classes
                    </button>
                    <button onClick={this.onPageStudents.bind(this)} className= {(this.state.class===false)?'navActive paperChild':'paperChild'}>
                        Students
                    </button>
                </section>
                <hr/>
                {/* paper section ends here */}
            
                {/* class list section */}
                      {this.renderPage()}
                {/* end of class list */}
            </div>
        )
    }
}
