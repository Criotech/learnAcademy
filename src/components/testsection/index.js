// import React, { Component } from 'react'

// class Ttest extends Component {
//     state = {
//         questionsInput: [0],
//         optionInput: []
//     }

//     addQuestion(data){
//         this.setState((prevState) => {
//             return {
//                 questionsInput: prevState.questionsInput.concat(data)
//             }
//         })
//     }

//     render() {
//         const { } = this.props
//         const { questionsInput } = this.state
//         let questionsCount = questionsInput.length
//         return (
//             <div>
//                 <div className="test-body" >
//                     <div className="test-title">
//                         Test Section
//                     </div> <br />
//                     <div>
//                         <div className="col">
//                             <input type="text" className="form-control" placeholder="Your ClassId" />
//                         </div> <br />
//                         <div className="col">
//                             <input type="text" className="form-control" placeholder="Your Class Name" />
//                         </div> <br />

//                         <div className="test-actions-button">
//                             <button type="button" className="btn btn-primary">Create Test</button>
//                             <button type="button" className="btn btn-danger ml-3">Delete Test</button>
//                         </div>

//                         <div className="testCreationSection">
//                             {(questionsInput) ? questionsInput.map((data, index) => {
//                                 return (
//                                     <div>
//                                         <div>
//                                             <div className="testLabel">
//                                                 <span><b>Question {index + 1} </b></span>
//                                                 <button className="btn btn-success" style={{ marginLeft: 10 }}>Remove Question</button>
//                                             </div>
//                                             <input type="text" className="form-control" placeholder="Question" />

//                                             <div className="testOptions">
//                                                 <span><b> Answer Choices </b></span> <button className="add-option">+</button>
//                                                 <button className="add-option" style={{ backgroundColor: '#DC3545' }}>-</button>
//                                             </div>

//                                             <div className="testOptionsInputs">
//                                                 <input type="radio" style={{ marginRight: 10 }} />
//                                                 <input type="text" className="form-control" placeholder="Option" />
//                                             </div>
//                                         </div>

//                                         <button className="btn btn-success" style={{display: (index == questionsCount-1)? "block":"none"}} onClick={this.addQuestion.bind(this, index+1)}>Add Question</button>
//                                         <hr />


//                                     </div>
//                                 )
//                             }) : <div></div>}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }

// export default Ttest



import React, { Component } from 'react'
import Sheader from '../dashboard/StudentDashboard/Sheader'
import Test from './test'
import { connect } from 'react-redux';
import { logout, checkIfEnrolled } from '../../actions';


class IntroTest extends Component {

    onLogout() {
        this.props.logout()
    }

    onSubmit() {
        const { classId, studentName, studentId } = this.props.location.state
        this.props.checkIfEnrolled({ classId, studentId })
    }

    render() {
        const { test } = this.props
        const { userFullName, userRole } = this.props.user
        const { classId, studentName, studentId } = this.props.location.state

        return (
            <div className="test-body1">
                <Sheader name={userFullName} role={userRole} onLogout={this.onLogout.bind(this)} />
                {(test) ?
                    (<Test test={test} classId={classId} studentName={studentName} studentId={studentId} />)
                    :
                     (
                        <div className="Icard">
                            <div className="Ihead">
                                <h1 className="IheadH1">Chemistry</h1>
                                <p className="IheadP">Test on what you have learnt during the course of the lesson</p>
                            </div>

                            <div className="Ibody">
                                <div className="Iname">
                                    <span>Name:</span>
                                    <span><i>{studentName}</i></span>
                                </div>
                                <br />
                                <div className="Iname">
                                    <span>CLASS Id:</span>
                                    <span><i>{classId}</i></span>
                                </div>
                            </div>
                            <br />
                            <div className="Ifoot">
                                <button className="Ibutton" onClick={this.onSubmit.bind(this)} >START TEST</button>
                            </div>
                        </div>
                    )
                    }
            </div>
        )

    }
}

const mapStateToProps = ({ auth, TestReducer }) => {
    const { user } = auth;
    const { test } = TestReducer;
    return { user, test }
}

export default connect(mapStateToProps, { logout, checkIfEnrolled })(IntroTest)

