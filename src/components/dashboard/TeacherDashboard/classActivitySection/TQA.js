import React, { Component } from 'react'
import QAList from './QAlist'

class TQA extends Component {
    render() {
        return (
            <div style={{ backgroundColor: '#E9EBEE' }} className='chatContainer'>
                <div className="chattop">
                    <span className="classNo">
                        640 Questions asked
                    </span>

                </div>
                <hr />

                <div className="chat">
                    <QAList />
                    <div className="chatFooter">
                        <input className="inputMessage" type="text" />
                        <div className="send" style={{marginTop: 10, fontSize: 28, color: 'red', paddingLeft: 20}}>
                            <i class="fa fa-paper-plane" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>


            </div>
        )
    }
}

export default TQA