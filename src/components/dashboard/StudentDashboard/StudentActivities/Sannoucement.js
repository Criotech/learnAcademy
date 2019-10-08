import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getStudentAnnouncementData } from '../../../../actions';


class Sannoucement extends Component {
    
    componentDidMount(){
        this.props.getStudentAnnouncementData(this.props.classId)
    }

    render() {
        return (
                 <div style={{ backgroundColor: '#E9EBEE' }} className='chatContainer'>
                <div className="chattop">
                    <span className="classNo">
                        Announcement
                    </span>

                </div>
                <hr />

                <div className="chat">
                      {(this.props.announcements) ? this.props.announcements.map((data) => {
                        return (
                            <div key={data.announcementId} className="announcementList">
                                <div className="oneAnnouncement">
                                    {data.content}
                                </div>
                            </div>
                        )
                    }) : ''
                    }

                   
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ AnnouncementReducer }) => {
    const { announcements } = AnnouncementReducer;
    return { announcements }
}

export default connect(mapStateToProps, {
    getStudentAnnouncementData
})(Sannoucement)
