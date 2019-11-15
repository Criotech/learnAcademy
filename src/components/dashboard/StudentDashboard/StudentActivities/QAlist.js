import React, { Component } from 'react'
import { connect } from 'react-redux';
// import { sendReply } from '../../../../actions';

class QAlist extends Component {
    // state = {
    //     replies: false,
    //     reply: false,
    //     message: ''
    // }

    // handleChange(event) {
    //    let  { value } = event.target
    //    this.setState({
    //        message: value
    //    })
    // }

    // submitReply() {      
    //     this.setState({
    //         message: ''
    //     })        
    //     let {message} = this.state;
    //     let { classId, userName, userRole } = this.props
    //     this.props.sendReply({ classId, userName, userRole, message })
    // }

    // onRepliesPress() {
    //     this.setState({
    //         replies: !this.state.replies,
    //         reply: false
    //     })
    // }

    // onReplyPress() {
    //     this.setState({
    //         reply: !this.state.reply,
    //         replies: false
    //     })
    // }

    // renderSendReply() {
    //     if (this.state.reply) {
    //         return (
    //             <div className="renderSendReply">
    //                 <input className="inputReplyMessage" value={this.state.message} name="message" type="text" />
    //                 <div onClick={this.submitReply.bind(this)} className="send">
    //                     <i className="fa fa-paper-plane" aria-hidden="true"></i>
    //                 </div>
    //             </div>
    //         )
    //     }
    // }

    // renderReplies() {
    //     if (this.state.replies) {
    //         return (
    //             <div className="replyMessages">
    //                 <div className="replyMessage">
    //                     <span className="senderName">Siyanbola Opeoluwa</span> <span className="senderMessage">The first differential of 3x is 3.</span>
    //                 </div>
    //                 <div className="replyMessage">
    //                     <span className="senderName">Siyanbola Opeoluwa</span> <span className="senderMessage">The first differential of 3x is 3.</span>
    //                 </div>
    //                 <div className="replyMessage">
    //                     <span className="senderName">Siyanbola Opeoluwa</span> <span className="senderMessage">The first differential of 3x is 3.</span>
    //                 </div>
    //             </div>
    //         )
    //     }
    // }

    render() {
        let { QAData } = this.props
        return (
            <div>
                <ul className="overflow-auto">
                    {
                        (QAData) ? QAData.map((data, index) => {
                            return (
                                <li className='chatItem' key={index}>
                                    <div className="chatItemChild">
                                        <div className="mainMessage">
                                            <span className="senderName">{data.userName} <i style={{fontSize: 12, color: 'red'}}>{data.userRole}</i></span> <span className="senderMessage">{data.message}</span>
                                        </div> <br />
                                        {/* <span onClick={this.onReplyPress.bind(this)} style={{ color: '#1865F2', fontSize: 15, paddingRight: 10, cursor: 'pointer' }} >reply</span>
                                        <span onClick={this.onRepliesPress.bind(this)} style={{ color: '#1865F2', cursor: 'pointer', fontSize: 15 }}><i style={{ color: 'chocolate' }} className="fa fa-eye" aria-hidden="true"></i> <span style={{ paddingRight: 2 }}>view replies</span></span> */}
                                        {/* {this.renderReplies()}
                                        {this.renderSendReply()} */}
                                    </div>
                                </li>
                            )
                        }) : (<p>No Question asked</p>)
                    }

                </ul>
            </div>
        )
    }
}

// const mapStateToProps = ({ auth, QAReducer }) => {
//     const { user  } = auth;
//     const { QAData } = QAReducer
//     return { user, QAData }
// }

export default connect(null, null)(QAlist)


