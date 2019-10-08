import React, { Component } from 'react'
import Learn from "../../img/learn.png"
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { Modal } from 'react-bootstrap'
import swal from '@sweetalert/with-react'
import { toggleLgShow, joinClass, fetchStudentClassData } from '../../../actions';


class SClassList extends Component {
    state = {
        value: ''
    }

    componentWillMount() {
        this.props.fetchStudentClassData()
    }

    setLgShow() {
        this.props.toggleLgShow(!this.props.lgShow)
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    onJoinClass(event) {
        event.preventDefault()
        this.props.joinClass(this.state.value)
    }

    renderClassList() {
        if (this.props.classData) {
            return (
                <div>
                    {this.props.classData.classData.map((data) => {
                        console.log(data)
                        return (
                            <Link key={data.classId} style={{ color: 'black', textDecoration: 'none' }} to={`/studentclassactivity/${data.classId}`}>
                                <div className="classRender">
                                    <div className="classImage">
                                        <img src={data.classImage} className="wide" alt="" />
                                    </div>
                                    <div className="classtitle">
                                        <span className="classtitle1">{data.className}</span>
                                        <span className="clatitle2"><i>{data.teacherName}</i></span>
                                        <span className="clatitle2"> Class </span>
                                    </div>
                                </div>
                            </Link>

                        )
                    })}
                </div>
            )

        } else {
            return <div></div>
        }
    }

    render() {
        if (this.props.message) {
            swal(`${this.props.message}`);
        }
        return (
            <div>
                <section className="classList" >
                    <div className="container">
                        <h5 className="classListh5">
                            <span className="classListh5l">Your classes</span>
                            <span className="classListh5r" onClick={this.setLgShow.bind(this)}><i className="fa fa-plus" aria-hidden="true"></i> New class </span>
                        </h5>

                        <div>
                             {this.renderClassList()} 
                        </div>

                    </div>
                </section>

                <Modal
                    show={this.props.lgShow}
                    onHide={this.setLgShow.bind(this)}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Join a new class</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form>
                            <span className="clatitle2"><i>Enter the class code for the new class you want to apply to:</i></span>
                            <input type="text" onChange={this.handleChange.bind(this)} placeholder='code for new class' />
                            <input type="submit" onClick={this.onJoinClass.bind(this)} value='Apply' />
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
    const { message, lgShow, classData } = ClassReducer;
    return { message, lgShow, classData }
}

export default connect(mapStateToProps, {
    toggleLgShow, joinClass, fetchStudentClassData
})(SClassList)


