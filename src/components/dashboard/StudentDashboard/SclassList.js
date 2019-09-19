import React, { Component } from 'react'
import Learn from "../../img/learn.png"
import { Modal } from 'react-bootstrap'


export default class classList extends Component {
    state = {
        lgShow: false,
        value: ''
    }

    setLgShow() {
        this.setState({
            lgShow: !this.state.lgShow
        })
    }

    handleChange(event) {
         this.setState({value: event.target.value});
         console.log(this.state.value)
    }

    render() {
        return (
            <div>
                 <section className="classList" >
                <div className="container">
                    <h5 className="classListh5">
                        <span className="classListh5l">Your classes</span>
                        <span className="classListh5r" onClick={this.setLgShow.bind(this)}><i class="fa fa-plus" aria-hidden="true"></i> New class </span>
                    </h5>

                    <div className="classRender">
                        <div className="classImage">
                            <img src={Learn} className="wide" alt="" />
                        </div>
                        <div className="classtitle">
                            <span className="classtitle1">Mathematics</span>
                            <span className="clatitle2"><i>John digle class</i></span>                            
                            <span className="clatitle2">1 Lecture</span>
                        </div>
                    </div>

                    <div className="classRender">
                        <div className="classImage">
                            <img src={Learn} className="wide" alt="" />
                        </div>
                        <div className="classtitle">
                            <span className="classtitle1">English</span>
                            <span className="clatitle2"><i>Mr Apeloko class</i></span>                                                        
                            <span className="claatitle2">2 Lectures</span>
                        </div>
                    </div>
                </div>
            </section>

            <Modal 
                show={this.state.lgShow}
                onHide={this.setLgShow.bind(this)}
            >
            <Modal.Header closeButton>
                <Modal.Title>Join a new class</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form>
                    <span className="clatitle2"><i>Enter the class code for the new class you want to apply to:</i></span> 
                    <input type="text" placeholder='code for new class'/>      
                    <input type="submit" value='Apply'/>             
                </form>
            </Modal.Body>
            <Modal.Footer>
           
            </Modal.Footer>
            </Modal>
        </div>
           
        )
    }
}

