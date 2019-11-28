import React, { Component } from 'react'
import './teacherDashboard.css'
import ClassList from './classList'
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

    onClassClick(classId){
        this.props.history.push(`/teacherclassactivity/${classId}`)
    }

    renderPage(){
         if (this.state.class) {
            return <ClassList onClassClick={(classId) => this.onClassClick.bind(this, classId)} /> 
        } 
    }

    render() {

        const {userFullName, userRole} = this.props.user                     
        return (
            <div>
                <Theader name={userFullName} role={userRole} onLogout={this.onLogout.bind(this)} />
                {/* papper section */}
                <section className="paper" style={{paddingLeft: 10}}>
                    <button className= {(this.state.class)?'navActive paperChild':'paperChild'} onClick={this.onPageClass.bind(this)} >
                        Classes
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
    return { user }
}

export default connect(mapStateToProps, {
    logout
})(Tdashboard)
