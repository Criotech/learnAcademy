import React, { Component } from 'react'
import './login.css'
import Navbar from '../nav.js';

class Login extends Component {
   state = {
       role: "",
       toggleCreateOrLogin: false
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

   toggleSubmitButton (){
       this.setState({
           toggleCreateOrLogin : !this.state.toggleCreateOrLogin
       })
   }

   renderFormContent() {
       if (this.state.role === "teacher") {
        return(
            <div className="lcontent">
                <h1 className="lh1">Help every student succeed with personalized practice. 100% free.</h1>
                <h2 className="lh2">
                    <ul style={{ listStyle: "disc", paddingLeft: "17px", color: "#FFFFFF" }}>
                        <li>Find standards-aligned content</li>
                        <li>Assign practice exercises, videos and articles</li>
                        <li>Track student progress</li> <li>Join millions of teachers and students</li>
                    </ul></h2>
            </div>
        )
       } else if(this.state.role === "student"){
           return(
            <div className="lcontent">
                <h1 className="lh1">A world class education for anyone, anywhere. 100% free.</h1> 
                <h2 className="lh2">
                    Join Learn Academy to get personalized help with what you’re studying or to learn something completely new. We’ll save all of your progress.
                </h2>
            </div>
        )
       }
   }

   renderSubmitButton (){
       if (this.state.toggleCreateOrLogin === false){
           return(
           <input type="Submit" className="loginbutton" value="create account"/>  )  
       } else {
           return (
           <input type="Submit" className="loginbutton" value="log in"/>    )   
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
                        {this.renderFormContent()}
                    </div>   

                    <div className="right">
                        <div className="rtop">
                            <button style={{backgroundColor: (this.state.role==="student") ? active: '', color: (this.state.role==="student") ? "white": ''}} onClick={this.onLearnerButtonPress.bind(this)} className="rnav">Learner</button>
                            <button style={{backgroundColor: (this.state.role==="teacher") ? active: '', color: (this.state.role==="teacher") ? "white" : ''}} onClick={this.onTeacherButtonPress.bind(this)} className="rnav">Teacher</button>
                        </div>

                    <form action="">
                            <input type="text" className="input" placeholder="Username" /> <br/> <br/>                                                    
                            <input type="email" className="input" placeholder="Email" /> <br/> <br/>
                            <input type="password" className="input" placeholder="Password" /> 
                            <input type="hidden" value={this.state.role} />
                            <br/> <br/>

                            {this.renderSubmitButton()}
                            
                    </form>
                        <br/>
                    <h6 onClick={this.toggleSubmitButton.bind(this)} style={{color: "#71B307", paddingLeft: 100 }}>{(this.state.toggleCreateOrLogin === false)?'login account':'create account'} </h6>
                    </div>
                </div>     

            </div>
        )
    }
}

export default Login