import React, { Component } from 'react'
import Theader from './Sheader.js'
import SclassList from './SclassList'
import { connect } from 'react-redux';
import { logout } from '../../../actions';


class Sdashboard extends Component {
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

    onPageProfile() {
        this.setState({
            class: false
        })
    }

    renderPage(){
         if (this.state.class) {
            return <SclassList /> 
        } else {
            return <div>You have not been enrolled for any class</div>
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
                    <button onClick={this.onPageProfile.bind(this)} className= {(this.state.class===false)?'navActive paperChild':'paperChild'}>
                        Your Profile 
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
})(Sdashboard)

