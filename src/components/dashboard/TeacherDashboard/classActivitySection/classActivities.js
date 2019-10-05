import React, { Component } from 'react'
import Theader from '../Theader.js'
import Tcurriculum from './Tcurriculum'
import Tlecture from './Tlecture'
import TQA from './TQA'
import Tannoucement from './Tannoucement'
import { connect } from 'react-redux';
import { logout } from '../../../../actions';

class ClassActivity extends Component {
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
            return (<Tcurriculum classId={this.props.match.params.classId} />)
        } else if (this.state.nav==='lectures'){
            return (<Tlecture classId={this.props.match.params.classId}/>)
        } else if (this.state.nav==='QA'){
            return (<TQA />)
        } else if (this.state.nav==='announcement'){
            return (<Tannoucement  classId={this.props.match.params.classId} />)
        }
  }

    render() {
        const {userFullName, userRole} = this.props.user                     

        return (
            <div>
                <Theader name={userFullName} role={userRole} onLogout={this.onLogout.bind(this)} />

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

const mapStateToProps = ({ auth }) => {
    const { user } = auth;
    console.log(user)
    return { user }
}

export default connect(mapStateToProps, {
    logout
})(ClassActivity)
