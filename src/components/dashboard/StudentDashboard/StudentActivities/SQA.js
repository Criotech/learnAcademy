import React, { Component } from 'react'
import QAList from './QAlist'
import { connect } from 'react-redux';
import { sendMessage, sendClassIdentifier } from '../../../../actions';

class SQA extends Component {
    state = {
        message: ''
    }

    componentWillMount() {
        this.props.sendClassIdentifier(this.props.classId)
    }    

    handleChange(event) {
       let  { value } = event.target
       this.setState({
           message: value
       })
    }

    sendMessage(){
        this.setState({
            message: ''
        })        
        let {message} = this.state;
        let { classId, user } = this.props
        this.props.sendMessage({ id: (Date.now().toString(36) + Math.random().toString(36).substr(2, 5)).toUpperCase(), classId, userName: user.userFullName, userRole: user.userRole, message })
    }

    render() {
        return (
            <div style={{ backgroundColor: '#E9EBEE' }} className='chatContainer'>
                <div className="chattop">
                    <span className="classNo">
                        {this.props.QAData.length} Questions asked
                    </span>

                </div>
                <hr />

                <div className="chat">
                    <QAList classId={this.props.classId} userName={this.props.user.userFullName} userRole={this.props.user.userRole} QAData={this.props.QAData} />
                    <div className="chatFooter">
                        <input onChange={this.handleChange.bind(this)} value={this.state.message}  className="inputMessage" name="message" type="text" />
                        <div className="send" onClick={this.sendMessage.bind(this)} style={{marginTop: 10, fontSize: 28, color: 'red', paddingLeft: 20}}>
                            <i className="fa fa-paper-plane" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ auth, QAReducer }) => {
    const { user  } = auth;
    const { QAData } = QAReducer
    // console.log(QAData)
    return { user, QAData }
}

export default connect(mapStateToProps, {
    sendMessage, sendClassIdentifier
})(SQA)
