import React, { Component } from 'react'
import { connect } from 'react-redux';
import { studentsGetLectures, passVideoToParent } from '../../../../actions';

class Slecture extends Component {

    componentDidMount() {
        this.props.studentsGetLectures(this.props.classId)
    }

    passVideoToParent(data) {
        this.props.passVideoToParent(data)
    }

    render() {
        return (
            <div style={{ backgroundColor: '#E9EBEE' }} className='chatContainer'>
                <div className="chattop">
                    <span className="classNo">
                        Lectures
                    </span>

                </div>
                <hr />

                <div className="chat">
                    <div className="announcementList">
                        <table className="table">

                             <tbody style={{ color: '#28A745' }} >
                                {(this.props.lectures ) ?
                                    this.props.lectures.lecturesData.map((data, index) => {
                                        return (
                                            <tr onClick={this.passVideoToParent.bind(this, data.lecture)} className='some' key={data.id} style={{ cursor: 'pointer' }}>
                                                <th>lecture {index +1}</th>
                                                <td style={{ fontWeight: 'bold' }}> <i style={{ paddingLeft: 5 }} className="fa fa-play" aria-hidden="true"></i> {data.title} </td>
                                            </tr>)
                                    }) : <tr></tr>
                                }


                            </tbody> 
                        </table>
                    </div>


                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ LectureReducer }) => {
    const { lectures } = LectureReducer;
    return { lectures }
}

export default connect(mapStateToProps, {
    studentsGetLectures, passVideoToParent
})(Slecture)
