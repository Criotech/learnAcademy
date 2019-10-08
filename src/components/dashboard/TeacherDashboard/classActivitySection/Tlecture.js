import React, { Component } from 'react'
import TlectureList from './TlectureList'
import { connect } from 'react-redux';
import swal from '@sweetalert/with-react'
import { Spinner } from 'react-bootstrap'
import { createLecture, getLectures } from '../../../../actions';

class Tlecture extends Component {
    state = {
        title: '',
        lecture: null
    }
    
    componentDidMount() {
        this.props.getLectures(this.props.classId)
    }

    handleChange(event) {
        this.setState({
            title: event.target.value
        })
    }

    handleFileChange(event) {
        this.setState({
            lecture: event.target.files[0]
        })
    }

    onCreateLecture(event) {
        event.preventDefault()
        const { title, lecture } = this.state
        const { classId } = this.props
        this.props.createLecture({ classId, title, lecture })
    }

    render() {
         if (this.props.mes) {
            swal(`${this.props.mes}`);
        }
        return (
            <div className="container">
                <form>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" onChange={this.handleChange.bind(this)} placeholder="Lecture title" aria-describedby="basic-addon2" />
                            <div className="input-group-append">
                                <span className="input-group-text" id="basic-addon2">Lecture title</span>
                            </div>
                    </div>

                    <div className="input-group mb-3">
                        <input type="file" className="form-control" onChange={this.handleFileChange.bind(this)} placeholder="Upload Video" aria-describedby="basic-addon2" />
                            <div className="input-group-append">
                            </div>
                    </div>

                    {(this.props.status) ?
                        <Spinner animation="grow" />
                        :
                        <input type="submit" onClick={this.onCreateLecture.bind(this)} className='btn-success postCurriculum' value="Post" />                        
                    }

                </form>

                <hr/>

            <TlectureList  lectures={this.props.lectures} />
            </div>
                )
    }
}

const mapStateToProps = ({ LectureReducer }) => {
    const { mes, lectures, status } = LectureReducer;
    console.log(lectures)
    return { mes,  lectures, status }
}

export default connect(mapStateToProps, {
   createLecture, getLectures
})(Tlecture)
