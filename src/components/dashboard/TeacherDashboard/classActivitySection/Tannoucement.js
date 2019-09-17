import React, { Component } from 'react'

class Tannoucement extends Component {
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
                    <div className="announcementList">
                        <div className="oneAnnouncement">
                            Welcome everyone to this amazing class i am very sure you will have a nice time.
                        </div>
                        <div className="oneAnnouncement">
                            Welcome everyone to this amazing class i am very sure you will have a nice time.
                        </div>
                    </div>

                    <div className="chatFooter">
                        <input className="inputMessage" type="text" />
                        <div className="send">
                            <i class="fa fa-paper-plane" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Tannoucement