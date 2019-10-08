import React, { Component } from 'react'
import { connect } from 'react-redux';
import swal from '@sweetalert/with-react'
import { deleteLecture } from '../../../../actions';


class TlectureList extends Component {
    
    onDeleteLecture ({ classId, lectureId }) {
        swal("Are you sure you want to do this?", {
            buttons: ["No", "Yes"],
        }).then((value) => {
            if (value === true) {
                this.props.deleteLecture({ classId, lectureId })                
            }
        })
    }

    render() {
        let { lectures } = this.props
        let lecture
        if (lectures) {
            lecture = lectures.lecturesData.map((data, index) => {
                return (
                    <tr key={data.id} style={{ cursor: 'pointer' }}>
                        <th style={{ color: '#28A745' }}>lecture {index +1}</th>
                        <td style={{ fontWeight: 'bold', color: '#28A745' }}> <i style={{ paddingRight: 5, color: '#28A745' }} className="fa fa-stop-circle-o" aria-hidden="true"></i>
                          {data.title} </td>
                        <td onClick={this.onDeleteLecture.bind(this, { classId: data.class, lectureId: data.id})}><i style={{ color: 'red', fontSize: 25 }} className="fa fa-trash" aria-hidden="true"></i></td>
                    </tr>
                )
            })
        } else {
            return <div>Loading ...</div>
        }
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col" style={{ color: '#28A745' }}>{lectures.count} Lectures </th>
                            <th scope="col" style={{ color: '#28A745' }}>Lecture title </th>
                            <th scope="col" style={{ color: '#28A745' }}>Delete lecture</th>
                        </tr>
                    </thead>
                    <tbody>
                        {lecture}

                    </tbody>
                </table>
            </div>
        )
    }
}


export default connect(null, {
  deleteLecture
})(TlectureList)
