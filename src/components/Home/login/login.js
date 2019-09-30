import React, { Component } from 'react'
import './login.css'
import { connect } from 'react-redux';
import Navbar from '../nav.js';
import LoginNote from './loginNote'
import { emailChanged, passwordChanged, fullNameChanged, signup, login } from '../../../actions';


class Login extends Component {
   state = {
       role: 'teacher',
       toggleCreateOrLogin: false
   }

    
   onEmailChange(event) {
        this.props.emailChanged(event.target.value)
    }

    onPasswordChange(event) {
        this.props.passwordChanged(event.target.value)
    }

    onFullNameChange(event) {
        this.props.fullNameChanged(event.target.value)
    }

   onTeacherButtonPress(){
        this.setState({
            role: "teacher"
        })
   }

   onLearnerButtonPress(){
        this.setState({
            role: "student"
        })
   }

   onSignup(event){
       event.preventDefault();
       let role = this.state.role;
       const { email, password, fullName } = this.props;       
       this.props.signup({ email, password, fullName, role })
   }

   onLogin(event){
      event.preventDefault();
       const { email, password } = this.props;       
       this.props.login({ email, password })
       this.props.history.push(`/teacherDashboard`)
   }

   toggleSubmitButton (){
       this.setState({
           toggleCreateOrLogin : !this.state.toggleCreateOrLogin
       })
   }



   renderSubmitButton (){
       if (this.state.toggleCreateOrLogin === false){
           return(
           <input type="Submit" onClick={this.onSignup.bind(this)} className="loginbutton" value="create account"/>  )  
       } else {
           return (
           <input type="Submit" onClick={this.onLogin.bind(this) } className="loginbutton" value="Log in"/>    )   
       }
   }

    render() {
        const active = "#518005";

        return (
            <div className="wrapper">
                <Navbar />

                <br/>   
                <div className="login">
                    
                    <div className="left">
                        <LoginNote role={this.state.role} />
                    </div>   

                    <div className="right">
                        <div className="rtop">
                            <button style={{backgroundColor: (this.state.role==="student") ? active: '', color: (this.state.role==="student") ? "white": ''}} onClick={ this.onLearnerButtonPress.bind(this)} className="rnav">Learner</button>
                            <button style={{backgroundColor: (this.state.role==="teacher") ? active: '', color: (this.state.role==="teacher") ? "white" : ''}} onClick={this.onTeacherButtonPress.bind(this)} className="rnav">Teacher</button>
                        </div>

                    <form>
                            <input onChange={this.onFullNameChange.bind(this)} type={(this.state.toggleCreateOrLogin === false) ? "text":"hidden"} className="input"
                            value={this.props.fullName} placeholder="Fullname" /> <br/> <br/>                                                    
                            <input type="email" onChange={this.onEmailChange.bind(this)} className="input" value={this.props.email} placeholder="Email" /> <br/> <br/>
                            <input type="password" onChange={this.onPasswordChange.bind(this)} className="input" value={this.props.password} placeholder="Password" /> 
                            <br/> <br/>

                            {this.renderSubmitButton()}
                            
                    </form>
                        <br/>
                    <h6 onClick={this.toggleSubmitButton.bind(this)} style={{color: "#71B307", paddingLeft: 100, cursor: "pointer" }}>{(this.state.toggleCreateOrLogin === false)?'login account':'create account'} </h6>
                    </div>
                </div>     

            </div>
        )
    }
}


const mapStateToProps = ({ auth }) => {
    const { email, password, fullName, role, message } = auth;
    return { email, password, fullName, role, message }
}
export default connect(mapStateToProps, {
    emailChanged, passwordChanged, fullNameChanged, signup, login
})(Login)