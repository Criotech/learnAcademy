import React, { Component } from 'react'

export default class QAlist extends Component {
    state={
        replies: false,
        reply: false
    }

    onRepliesPress(){
        this.setState({
            replies: !this.state.replies,
            reply: false
        })
    }

    onReplyPress(){
        this.setState({
            reply: !this.state.reply,
            replies: false
        })
    }

    renderSendReply(){
            if (this.state.reply){
                return(
                    <div className="renderSendReply">
                        <input className="inputReplyMessage" type="text" />
                        <div className="send">
                            <i class="fa fa-paper-plane" aria-hidden="true"></i>
                        </div>
                    </div>
                )
            }
    }

    renderReplies(){
            if(this.state.replies){
                return(
                    <div className="replyMessages">
                        <div className="replyMessage">
                            <span className="senderName">Siyanbola Opeoluwa</span> <span className="senderMessage">The first differential of 3x is 3.</span>
                        </div>
                        <div className="replyMessage">
                            <span className="senderName">Siyanbola Opeoluwa</span> <span className="senderMessage">The first differential of 3x is 3.</span>
                        </div>
                        <div className="replyMessage">
                            <span className="senderName">Siyanbola Opeoluwa</span> <span className="senderMessage">The first differential of 3x is 3.</span>
                        </div>
                    </div>               
                )
            }      
        }

    render() {
        return (
            <div>
                    <ul style={{height: 450}} className="overflow-auto">
                        <li className='chatItem'>
                            <div className="chatItemChild">
                                <div className="mainMessage">
                                    <span className="senderName">Siyanbola Opeoluwa</span> <span className="senderMessage">What is the first differential of 3x?</span>                                    
                                </div> <br/>
                                <span onClick={this.onReplyPress.bind(this)}  style={{color: '#1865F2', fontSize: 15, paddingRight: 10, cursor: 'pointer'}} >reply</span> 
                                <span  onClick={this.onRepliesPress.bind(this)} style={{color: '#1865F2', cursor: 'pointer', fontSize: 15}}><i style={{color: 'chocolate'}} className="fa fa-eye" aria-hidden="true"></i> <span style={{paddingRight: 2}}>view replies</span></span>
                                {this.renderReplies()}
                                {this.renderSendReply()}
                            </div>
                        </li>                
                </ul>
            </div>
        )
    }
}


