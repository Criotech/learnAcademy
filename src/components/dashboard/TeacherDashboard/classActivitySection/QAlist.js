import React, { Component } from 'react'
import { connect } from 'react-redux';
import { sendReply } from '../../../../actions';

class QAlist extends Component {
    state = {
        message: '',
        reply: '',
        replies: ''
    }

    handleChange(event) {
        let { value } = event.target
        this.setState({
            message: value
        })
    }

    submitReply() {
        this.setState({
            message: '',
            reply: ''
        })
        let { message } = this.state;
        let { classId, userName, userRole } = this.props
        this.props.sendReply({ classId, userName, userRole, message })
    }

    changeReply(index) {
        if (this.state.reply !== index) {
            this.setState({
                reply: index,
                replies: ''
            })
        } else {
            this.setState({
                reply: '',
                replies: ''
            })
        }
    }

    changeReplies(index) {
        if (this.state.replies !== index) {
            this.setState({
                replies: index,
                reply: ""
            })
        } else {
            this.setState({
                replies: "",
                reply: ""
            })
        }
    }

    sendReply(chatId) {
        this.setState({
            message: '',
            replies: this.state.reply,
            reply: ''
        })
        const { classId, userName, userRole } = this.props
        this.props.sendReply({ chatId, classId, userName, message: this.state.message, userRole })
    }

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
                                            <span className="senderName">{data.userName} <i style={{ fontSize: 12, color: 'red' }}>{data.userRole}</i></span> <span className="senderMessage">{data.message}</span>
                                        </div> <br />
                                        <span onClick={this.changeReply.bind(this, index)} style={{ color: '#1865F2', fontSize: 15, paddingRight: 10, cursor: 'pointer' }} >reply</span>
                                        <span onClick={this.changeReplies.bind(this, index)} style={{ color: '#1865F2', cursor: 'pointer', fontSize: 15 }}><i style={{ color: 'chocolate' }} className="fa fa-eye" aria-hidden="true"></i> <span style={{ paddingRight: 2 }}>view replies ({(data.replies)?Object.values(data.replies).length:0})</span></span>

                                        <div style={{ display: (this.state.reply === index) ? "block" : "none" }} className="renderSendReply">
                                            <div style={{ display: 'flex' }}>
                                                <input className="inputReplyMessage" onChange={this.handleChange.bind(this)} value={this.state.message} name="message" type="text" />
                                                <div style={{ paddingLeft: 10 }} className="send">
                                                    <i onClick={this.sendReply.bind(this, data.chatId)} className="fa fa-paper-plane" aria-hidden="true"></i>
                                                </div>
                                            </div>

                                        </div>

                                        <div style={{ display: (this.state.replies === index) ? "block" : "none" }} className="replyMessages">
                                               {
                                                (data.replies) ? Object.values(data.replies).map((res, index) => {
                                                    return (
                                                        <div key={index}>
                                                        <div  className="replyMessage">
                                                            <span className="senderName">{res.userName} <i style={{ fontSize: 12, color: 'red' }}>{res.userRole}</i></span> <span className="senderMessage">{res.message}</span>
                                                        </div> <br/>
                                                        </div>

                                                    )
                                                }) : <span></span>
                                            }   

                                        </div>

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

export default connect(null, { sendReply })(QAlist)


