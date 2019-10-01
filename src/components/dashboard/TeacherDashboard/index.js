import React, { Component } from 'react'
import './teacherDashboard.css'
import ClassList from './classList'
import StudentList from './studentList'
import Theader from './Theader.js'
import { connect } from 'react-redux';
import { logout } from '../../../actions';

class Tdashboard extends Component {
    state = {
        class: true
    }

    onPageClass() {
        this.setState({
            class: true
        })
    } 

    onLogout(){
        this.props.logout()
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
        const {userFullName, userRole} = this.props.user                     
        return (
            <div>
                <Theader name={userFullName} role={userRole} onLogout={this.onLogout.bind(this)} />

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

const mapStateToProps = ({ auth }) => {
    const { user } = auth;
    console.log(user)
    return { user }
}

export default connect(mapStateToProps, {
    logout
})(Tdashboard)
