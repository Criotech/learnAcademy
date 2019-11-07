import React, { Component } from 'react'
import { connect } from 'react-redux';
import swal from '@sweetalert/with-react'
import { Modal } from 'react-bootstrap'
import { Table } from 'react-bootstrap'
import { getStudentsProfile } from '../../../../actions';

class Tprofile extends Component {
    componentWillMount() {
        this.props.getStudentsProfile(this.props.classId)
    }

    render() {
        const { profile } = this.props
        return (
            <div className='container'>
                <div className="container">
                    <div className="studentTableTop">
                        <h5 className="classListh5">
                            <span className="classListh5l">Students Academic Profile</span>
                        </h5>

                    </div>

                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Student Name</th>
                                <th>Student Score</th>
                                <th>Score in percent</th>
                            </tr>
                        </thead>
                        <tbody>
                            {(profile) ? profile.map((data, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index+1}</td>
                                        <td>{data.studentName}</td>
                                        <td>{data.score}</td>
                                        <td>{(data.score / data.total) * 100} %</td>
                                    </tr>)
                            }) : <span>Results has not been submited yet</span>}
                        </tbody>
                    </Table>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ TestReducer }) => {
    const { profile } = TestReducer;
    return { profile }
}

export default connect(mapStateToProps, { getStudentsProfile })(Tprofile)
