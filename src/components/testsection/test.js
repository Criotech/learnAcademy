import React, { Component } from 'react'
import { connect } from 'react-redux';
import swal from '@sweetalert/with-react'
import Thanks from './thanks'
import { updateAns, userScore } from '../../actions';

import "./test.css"

class Test extends Component {
    state = {
        questionIndex: 0,
        choice: '',
        minutes: null,
        seconds: null,
        hours: null
    }

    componentDidMount() {
        this.timer(parseInt(this.props.test.timer))
    }

    componentDidUpdate(previousProps, previousState) {
        if (this.state.choice !== previousState.choice) {
            let { questionIndex, choice } = this.state
            this.props.updateAns({ i: questionIndex, choice: parseInt(choice) })
        } 
         
    }


    timer(seconds) {
        let countdown
        const now = Date.now();
        const then = now + seconds * 1000
        this.displayTimeLeft(seconds);

        countdown = setInterval(() => {
            const secondsLeft = Math.round((then - Date.now()) / 1000);
            //check if we should stop it!
            if (secondsLeft <= 0) {
                clearInterval(countdown)
                return
            }

            //displayit
            this.displayTimeLeft(secondsLeft);
        }, 1000);
    }


    displayTimeLeft(seconds) {
        const hours = Math.floor(seconds / 3600)
        const minutes = Math.floor(seconds / 60)
        const remainderSeconds = seconds % 60;

        this.setState({
            hours: hours,
            minutes: minutes,
            seconds: remainderSeconds
        })
    }

    selectNo(data) {
        console.log(data)
        this.setState({
            questionIndex: data
        })
    }

    pickAns(event) {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    onNext() {
        if (parseInt(this.state.questionIndex) !== this.props.test.testData.length - 1) {
            this.setState((prevState) => {
                return {
                    questionIndex: prevState.questionIndex + 1
                }
            })
        }
    }

    onPrev() {
        if (parseInt(this.state.questionIndex) !== 0) {
            this.setState((prevState) => {
                return {
                    questionIndex: prevState.questionIndex - 1
                }
            })
        }
    }

    submitAns() {
        let correctAns = this.props.test.testData.map((data, index) => {
            return parseInt(data.userAns) === parseInt(data.answer)
        })

        correctAns = correctAns.filter((data, index) => {
            return data === true
        })
        let correct = correctAns.length
        const { classId, studentName, studentId } = this.props
        const total = this.props.test.testData.length
        swal("Are you sure you want to submit test?", {
            buttons: ["No", "Yes"],
        }).then((value) => {
            if (value === true) {
                this.props.userScore({ correct, classId, studentName, studentId, total })
            }
        })
    }

    render() {
        let data = this.props.test
        // console.log(this.props.test.testData)
        let { choice, questionIndex, seconds, minutes, hours } = this.state
        return (
            <div className="Tcontainer">
                {(this.props.alert === 'You have successfully submitted your test')?<Thanks />:
                <div className="container">
                    <div className="Theader">
                        <div className="Ttitle">
                            <div className="licon">
                                <span>
                                    <i className="fa fa-grav" aria-hidden="true"></i>
                                </span>
                            </div>
                            <div className="Tsplit2">
                                <span>
                                    EXAM DETAILS
                               </span>
                                <span style={{ textTransform: 'uppercase' }}>
                                    {data.topic} EXAM
                               </span>
                                <span>
                                    {questionIndex + 1}/{data.count}
                                </span>
                            </div>
                        </div>
                        <div className="Ttimer">
                            <div className="licon">
                                <span>
                                    <i className="fa fa-clock-o" aria-hidden="true"></i>
                                </span>
                            </div>
                            <div className="Tsplit2">
                                <span>
                                    TIME REMAINING
                               </span>
                                <h5 style={{ color: 'red' }}>
                                    <b>{hours}:{minutes}:{seconds}</b>
                                </h5>
                            </div>
                        </div>
                    </div>
                    <br />

                    <div className="Tbody">
                        <div className="questions">
                            <div className="question">
                                <p> <b> {data.testData[questionIndex].question} </b></p>
                            </div> <hr />

                            {data.testData[questionIndex].options.map((doc, index) => {
                                return (
                                    <div key={index} className="options">
                                        <span className="radio"><input type="radio" checked={data.testData[questionIndex].userAns === index} onChange={this.pickAns.bind(this)} name="choice" value={index} /></span>
                                        <span>{doc}</span>
                                    </div>
                                )
                            })}

                            <br />
                            <div className="Tfoot">
                                <button className="fbtn" onClick={this.onPrev.bind(this)} >Previous</button>
                                <button className="fbtn" style={{ display: (this.state.questionIndex === this.props.test.testData.length - 1) ? 'none' : 'block' }} onClick={this.onNext.bind(this)}>Next</button>
                                <button className="fbtn" style={{ display: (this.state.questionIndex !== this.props.test.testData.length - 1) ? 'none' : 'block' }} onClick={this.submitAns.bind(this)}>Submit Test</button>
                            </div>
                        </div>

                        <div className="numbers">
                            <h6><i>Attempt Questions</i></h6> <hr />
                            <div className="no_container">
                                {data.testData.map((data, index) => {
                                    return (
                                        <button key={index} onClick={this.selectNo.bind(this, index)} style={{ borderColor: (typeof data.userAns === 'number') ? "red" : "lightblue" }} className="btn btn-light key">
                                            {index + 1}
                                        </button>
                                    )
                                })
                                }

                            </div>
                            <hr />
                            <div className="rep">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td><button className="btn btn-danger"></button></td>
                                            <td><i>signifies Answered question</i></td>
                                        </tr>
                                        <tr>
                                            <td><button className="btn" style={{ backgroundColor: "lightblue", color: "white" }}></button></td>
                                            <td><i>signifies Skipped question</i></td>
                                        </tr>
                                    </tbody>

                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                }
            </div>
        )
    }
}


const mapStateToProps = ({ TestReducer }) => {
    const { alert } = TestReducer;
    console.log(alert)
    return { alert }
}

export default connect(mapStateToProps, { updateAns, userScore })(Test)

