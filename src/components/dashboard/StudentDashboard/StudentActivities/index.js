import React, { Component } from 'react'
import Sheader from '../Sheader.js'
import Scurriculum from './Scurriculum'
import Slecture from './Slecture'
import SQA from './SQA'
import Sannoucement from './Sannoucement'
import Stest from './Stest'
import { connect } from 'react-redux';
import { logout } from '../../../../actions';

class StudentActivity extends Component {
    state = {
        nav: 'curriculum'
    }

    navCurriculum(){
        this.setState({
            nav: 'curriculum'
        })
    }

    navLectures(){
        this.setState({
            nav: 'lectures'
        })
    }
    navQA(){
        this.setState({
            nav: 'QA'
        })
    }
    navAnnouncement(){
        this.setState({
            nav: 'announcement'
        })
    }
    navTest(){
        this.setState({
            nav: 'test'
        })
    }
    onLogout(){
        this.props.logout()
    }

    renderActivity(){
        if (this.state.nav==='curriculum'){
            return (<Scurriculum classId={this.props.match.params.classId} />)
        } else if (this.state.nav==='lectures'){
            return (<Slecture classId={this.props.match.params.classId} />)
        } else if (this.state.nav==='QA'){
            return (<SQA classId={this.props.match.params.classId} />)
        } else if (this.state.nav==='announcement'){
            return (<Sannoucement classId={this.props.match.params.classId} />)
        } else if (this.state.nav==='test'){
            return (<Stest classId={this.props.match.params.classId} />)
        }
  }

    render() {
        const {userFullName, userRole} = this.props.user

        return (
            <div>
                <Sheader name={userFullName} role={userRole} onLogout={this.onLogout.bind(this)} />

                {/* video section */}
                 <div style={{display: (this.props.url)?"block":"none"}}>
                    <div className="embed-responsive embed-responsive-21by9">
                    <iframe className="embed-responsive-item" src={this.props.url} allowFullScreen></iframe>
                    </div>
                </div>  
                {/* video section ends here */}
                

                {/* papper section */}
                <section className="paper overflow-auto">
                    <button onClick={this.navCurriculum.bind(this)} className= {(this.state.nav==='curriculum')?'navActive paperChild':'paperChild'} >
                        Curriculum
                    </button>
                    <button onClick={this.navLectures.bind(this)} className= {(this.state.nav==='lectures')?'navActive paperChild':'paperChild'}>
                        Lectures
                    </button>
                     <button onClick={this.navQA.bind(this)}  className= {(this.state.nav==='QA')?'navActive paperChild':'paperChild'}>
                       Q&A
                    </button>
                    <button onClick={this.navAnnouncement.bind(this)}  className= {(this.state.nav==='announcement')?'navActive paperChild':'paperChild'}>
                        Announcement
                    </button>
                    <button onClick={this.navTest.bind(this)} className= {(this.state.nav==='test')?'navActive paperChild':'paperChild'}>
                        Test
                    </button>
                </section>
                <hr/>
                {/* paper section ends here */}                

                <section className="Toperations">   
                    {this.renderActivity()}
                </section>    
            </div>
        )
    }
}

const mapStateToProps = ({ LectureReducer, auth }) => {
    const { url } = LectureReducer;
    const { user } = auth;
    console.log(url)
    return { url, user }
}

export default connect(mapStateToProps, {logout})(StudentActivity)