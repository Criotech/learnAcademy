import React, { Component } from 'react'
import TlectureList from './TlectureList'
import { connect } from 'react-redux';
import swal from '@sweetalert/with-react'
import { createLecture } from '../../../../actions';

class Tlecture extends Component {
    state = {
        title: '',
        lecture: null
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

                    <input type="submit" onClick={this.onCreateLecture.bind(this)} className='btn-success postCurriculum' value="Post" />                        
                </form>

                <hr/>

            <TlectureList />
            </div>
                )
    }
}


export default connect(null, {
   createLecture
})(Tlecture)
