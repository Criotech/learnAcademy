import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import swal from '@sweetalert/with-react'
import Template from './testTemplate.csv'
import { createTest, getTest, updateTimer } from '../../../../actions';

class Ttest extends Component {
    state = {
        questions: '',
        timer: ''
    }
    componentDidMount() {
        this.props.getTest(this.props.classId)
    }

    componentDidUpdate(previousProps, previousState) {
        if (this.state.timer !== previousState.timer) {
            let { timer } = this.state
            let newtimer= timer.split(" ")
            newtimer = parseInt(newtimer[0]) * 60
            this.props.updateTimer({classId: this.props.classId, timer: newtimer })
        }
    }
    handleFileChange(event) {
        this.setState({
            questions: event.target.files[0]
        })
    }

    handleChange(event) {
        this.setState({
            timer: event.target.value
        })
    }

    onCreateTest(event) {
        event.preventDefault()
        const { questions } = this.state
        const { classId } = this.props
        this.props.createTest({ classId, questions })
    }

    render() {
        const { alert, test } = this.props
        if (alert) {
            swal(`${alert}`);
        }
        return (
            <div>

                <div style={{ marginTop: -20 }} className="jumbotron">
                    <h1 className="display-4">IMPORTANT INFORMATION</h1>
                    <p className="lead">Please note that test to be uploaded must be in CSV format, Kindly upload the test below <span>click to download test template</span></p>
                    <Link to={Template} target="_blank" download style={{ fontSize: 20 }}>Click to download test CSV template</Link>
                    {
                        (test.count !== 0) ? (<div></div>) :
                            <form>
                                <div className="input-group mb-3">
                                    <input type="file" className="form-control" onChange={this.handleFileChange.bind(this)} placeholder="Upload Questions" aria-describedby="basic-addon2" />
                                    <div className="input-group-append">
                                    </div>
                                </div>
                                <input type="submit" className='btn btn-primary btn-lg' onClick={this.onCreateTest.bind(this)} value="Upload Test" />
                            </form>
                    }
                    <br />

                    <table className="table">
                        <tbody>
                            <tr style={{ color: "#28A745", fontWeight: "bold", fontSize: 20 }}>
                                <td>{(test) ? test.topic : ''}</td>
                                <td>
                                    <div>
                                        <label htmlFor="exampleFormControlSelect1">Select Timer</label>
                                        <select className="form-control" name="timer" onChange={this.handleChange.bind(this)} value={this.state.className} id="exampleFormControlSelect1">
                                            <option>5 mins</option>
                                            <option>15 mins</option>
                                            <option>30 mins</option>
                                            <option>45 mins</option>
                                            <option>60 mins</option>
                                        </select>
                                    </div>
                                </td>
                                <td><button className="btn btn-danger">remove test</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}


const mapStateToProps = ({ TestReducer }) => {
    const { test, alert } = TestReducer;
    // console.log(test, alert)
    return { alert, test }
}

export default connect(mapStateToProps, {
    createTest, getTest, updateTimer
})(Ttest)
