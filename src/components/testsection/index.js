import React, { Component } from 'react'
import Sheader from '../dashboard/StudentDashboard/Sheader'
import Test from './test'
import { connect } from 'react-redux';
import { logout, checkIfEnrolled, updateStatus } from '../../actions';


class IntroTest extends Component {

    onLogout() {
        this.props.logout()
    }

    onSubmit() {
        const { classId, studentName, studentId } = this.props.location.state
        this.props.checkIfEnrolled({ classId, studentId })
        this.props.updateStatus({ classId, studentId })
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

export default connect(mapStateToProps, { logout, checkIfEnrolled, updateStatus })(IntroTest)

