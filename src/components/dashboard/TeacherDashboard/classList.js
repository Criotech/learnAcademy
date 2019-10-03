import React, { Component } from 'react'
import { connect } from 'react-redux';
// import Learn from "../../img/learn.png"
import { Modal } from 'react-bootstrap'
import swal from '@sweetalert/with-react'
import { createClass, toggleLgShow, fetchClassData } from '../../../actions';

class classList extends Component {
    state = {
        value: '',
        className: '',
        classImage: null
    }

    componentWillMount() {
        this.props.fetchClassData()
    }

    componentDidMount() {
        if (this.props.message){
            swal(
            <div style={{ textAlign: 'center', color: 'red' }} className="alert alert-danger" role="alert"> {this.props.message} </div>
            )
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.message !== this.props.message){
            swal(
            <div style={{ textAlign: 'center', color: 'red' }} className="alert alert-danger" role="alert"> {this.props.message} </div>
            )
        }
    }

    setLgShow() {
        this.props.toggleLgShow(!this.props.lgShow)
    }

    handleChange(event) {
        this.setState({
            className: event.target.value
        })        
    }

    handleFileChange(event){
        this.setState({
            classImage: event.target.files[0]
        })        
    }

    onCreateClass(event) {
        event.preventDefault()
        const { className, classImage } = this.state
        this.props.createClass({ className, classImage })
    }

    renderClassList() {
        if (this.props.classData){
            return(
                <div>
                    {this.props.classData.classData.map((data) => {
                console.log(data)
                return (
                    <div className="classRender" key={data.classId} >
                        <div className="classImage">
                            <img src={data.classImage} className="wide" alt="" />
                        </div>
                        <div className="classtitle">
                            <span className="classtitle1">{data.className}</span>
                            <span className="clatitle2">{data.students.length} student</span>
                        </div>
                    </div>
                )
            })}
                </div>
            )
            
        } else {
            return ( <div>No Class Added yet</div> )
        }
    }

    render() {
        return (
            <div>
                 <section className="classList">
                <div className="container">
                    <h5 className="classListh5">
                        <span className="classListh5l">Your classes ({this.props.classData?this.props.classData.count:''})</span>
                        <span className="classListh5r" onClick={this.setLgShow.bind(this)}><i className="fa fa-plus" aria-hidden="true"></i> Add class</span>
                    </h5>

                <div>
                    {this.renderClassList()}
                </div>
                    
                </div>
            </section>

            <Modal
                size="lg"
                show={this.props.lgShow}
                onHide={this.setLgShow.bind(this)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        <h5> Add new class</h5>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="modalData">
                     
                    <form>
                         <div className="form-group">
                            <label htmlFor="exampleFormControlSelect1">Select Class</label>
                            <select className="form-control" name="className" onChange={this.handleChange.bind(this)} value={this.state.className} id="exampleFormControlSelect1">
                            <option>Mathemathetics</option>
                            <option>English</option>
                            <option>Physics</option>
                            <option>Chemistry</option>
                            <option>Biology</option>
                            </select>
                        </div> 
                        <div className="form-group">
                            <label htmlFor="exampleFormControlFile1">Upload Class Image</label>
                            <input type="file"  onChange={this.handleFileChange.bind(this)} className="form-control-file" id="exampleFormControlFile1" />
                        </div>
                        <input type="submit" onClick={this.onCreateClass.bind(this)} className="btn btn-primary mb-3" value="Create" />
                    </form>
                      
                    </div>
                </Modal.Body>
            </Modal>
        </div>
           
        )
    }
}

const mapStateToProps = ({ ClassReducer }) => {
    const { message, lgShow, classData } = ClassReducer;
    return { message, lgShow, classData }
}

export default connect(mapStateToProps, {
    createClass, toggleLgShow, fetchClassData
})(classList)


