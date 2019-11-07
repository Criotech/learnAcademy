import React, { Component } from 'react'
import { connect } from 'react-redux';
import swal from '@sweetalert/with-react'
import { announcementChanged, postAnnouncement, getAnnouncementData } from '../../../../actions';

class Tannoucement extends Component {

    componentDidMount() {
        this.props.getAnnouncementData(this.props.classId)
    }

    onAnnouncementChange(event) {
        this.props.announcementChanged(event.target.value)
    }

    postAnnouncement(event) {
        event.preventDefault()

        this.props.postAnnouncement({ classId: this.props.classId, content: this.props.content })
    }

    render() {
        if (this.props.info) {
            swal(`${this.props.info}`);
        }

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

                    <div className="chatFooter">
                        <input className="inputMessage" value={this.props.content} onChange={this.onAnnouncementChange.bind(this)} type="text" />
                        <div className="send" onClick={this.postAnnouncement.bind(this)}>
                            <i className="fa fa-paper-plane" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ AnnouncementReducer }) => {
    const { info, content, announcements } = AnnouncementReducer;
    return { info, content, announcements }
}

export default connect(mapStateToProps, {
    announcementChanged, postAnnouncement, getAnnouncementData
})(Tannoucement)
