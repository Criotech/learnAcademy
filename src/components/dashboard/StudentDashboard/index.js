import React, { Component } from 'react'
import Theader from './Sheader.js'
import SclassList from './SclassList'

class Sdashboard extends Component {
    state = {
        class: true
    }

    onPageClass() {
        this.setState({
            class: true
        })
    } 

    onPageProfile() {
        this.setState({
            class: false
        })
    }

    renderPage(){
         if (this.state.class) {
            return <SclassList /> 
        } else {
            return <div>hello</div>
        } 
    }
    
    render() {                     
        return (
            <div>
                <Theader />

                {/* papper section */}
                <section className="paper" style={{paddingLeft: 150}}>
                    <button className= {(this.state.class)?'navActive paperChild':'paperChild'} onClick={this.onPageClass.bind(this)} >
                        Classes
                    </button>
                    <button onClick={this.onPageProfile.bind(this)} className= {(this.state.class===false)?'navActive paperChild':'paperChild'}>
                        Your Profile 
                    </button>
                </section>
                <hr/>
                {/* paper section ends here */}

                {/* class list section */}
                      {this.renderPage()}
                {/* end of class list */}
                
            </div>
        )
    }
}

export default Sdashboard
