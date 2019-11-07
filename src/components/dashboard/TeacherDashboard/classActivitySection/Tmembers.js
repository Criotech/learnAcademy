import React, { Component } from 'react'
import { connect } from 'react-redux';
import swal from '@sweetalert/with-react'
import { Modal } from 'react-bootstrap'
import { Table } from 'react-bootstrap'
import { addStudent, getStudentsDetails, toggleLgShow } from '../../../../actions';

class Tmembers extends Component {
    state = {
        studentMail: ''
    }

    componentDidMount() {
        this.props.getStudentsDetails(this.props.classId)
    }

    setLgShow() {
        this.props.toggleLgShow(!this.props.lgShow)
    }

    handleChange(event) {
        this.setState({
            studentMail: event.target.value
        })
    }

    onSubmit(event) {
        event.preventDefault();
        this.props.addStudent({ classId: this.props.classId, studentMail: this.state.studentMail })
    }

    render() {
        if (this.props.message) {
            swal(`${this.props.message}`);
        }

        return (
            <div className='container'>
                <div className="container">
                    <div className="studentTableTop">
                        <h5 className="classListh5">
                            <span className="classListh5l">Your Students (2)</span>
                        </h5>

                        <span className="classListh5r" onClick={this.setLgShow.bind(this)}><i className="fa fa-plus" aria-hidden="true"></i> New Student </span>
                    </div>

                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Student FullName</th>
                                <th>Student Email Address</th>
                            </tr>
                        </thead>
                        <tbody>
                            {(this.props.students) ? this.props.students.studentList.map((data, index) => {
                                return (
                                    <tr key={data.studentId} >
                                        <td>{index + 1}</td>
                                        <td>{data.studentName}</td>
                                        <td>{data.studentEmail}</td>
                                    </tr>
                                )
                            }) : null
                            }

                        </tbody>
                    </Table>
                </div>

                <Modal
                    show={this.props.lgShow}
                    onHide={this.setLgShow.bind(this)}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Add a new student to the class</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form>
                            <span className="clatitle2"><i>Enter the student email address:</i></span> <br/>    
                            <input type="text" onChange={this.handleChange.bind(this)} placeholder='Student Email' />
                            <input type="submit" onClick={this.onSubmit.bind(this)} value='Add Student' />
                        </form>
                    </Modal.Body>
                    <Modal.Footer>

                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = ({ ClassReducer }) => {
    const { students, lgShow, message } = ClassReducer;
    return { students, lgShow, message}
}

export default connect(mapStateToProps, {
    addStudent, getStudentsDetails, toggleLgShow
})(Tmembers)
