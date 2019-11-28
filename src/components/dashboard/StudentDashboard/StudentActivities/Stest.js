import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

class Stest extends Component {            
    render() {
        const {userFullName, userId} = this.props.user
        return (
            <div style={{ backgroundColor: '#E9EBEE' }} className='chatContainer'>
                <div className="chattop">
                    <span className="classNo">
                        Test
                    </span>

                </div>
                <hr />

                <div className="chat">
                    <div className="announcementList">
                        <center>
                            <h4>Click on the button below to take test</h4>
                            <p>Please you have only one attempt to take test after take you will not be allowed to take test</p>
                            <hr />
                            <center>
                                <Link
                                    style={{ color: '#ffffff' }}
                                    to={{
                                        pathname: `/test/${this.props.classId}`,
                                        state: {
                                            studentName: userFullName,
                                            studentId: userId,
                                            classId: this.props.classId,
                                        }
                                    }}
                                    className="linkStyle" >
                                    <button className="btn btn-success">Navigate to test section</button>
                                </Link>
                            </center>
                        </center>
                    </div>


                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ auth }) => {
    const { user } = auth;
    return { user }
}

export default connect(mapStateToProps, null)(Stest)