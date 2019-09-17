import React, { Component } from 'react'
import Theader from '../Theader.js'
import Tcurriculum from './Tcurriculum'
import Tlecture from './Tlecture'
import TQA from './TQA'
import Tannoucement from './Tannoucement'

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

    renderActivity(){
        if (this.state.nav==='curriculum'){
            return (<Tcurriculum />)
        } else if (this.state.nav==='lectures'){
            return (<Tlecture />)
        } else if (this.state.nav==='QA'){
            return (<TQA />)
        } else if (this.state.nav==='announcement'){
            return (<Tannoucement   />)
        }
  }

    render() {
        return (
            <div>
                <Theader />

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

export default ClassActivity