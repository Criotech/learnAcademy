import React, { Component } from 'react'
import renderHTML from 'react-render-html'
import { connect } from 'react-redux';
import { getStudentCurriculumData } from '../../../../actions';


class Scurriculum extends Component {

    componentDidMount(){
        this.props.getStudentCurriculumData(this.props.classId)
    }

    render() {
        return (
                 <div style={{ backgroundColor: '#E9EBEE' }} className='chatContainer'>
                <div className="chattop">
                    <span className="classNo">
                        Curriculum
                    </span>

                </div>
                <hr />

                <div className="chat">
                    <div className="announcementList">
                        {renderHTML(this.props.content)}
                    </div>

                   
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ CurriculumReducer }) => {
    const { content } = CurriculumReducer;
    return { content }
}

export default connect(mapStateToProps, {
    getStudentCurriculumData
})(Scurriculum)