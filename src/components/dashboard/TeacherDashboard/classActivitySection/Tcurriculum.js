import React, { Component } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
// import renderHTML from 'react-render-html'
import { connect } from 'react-redux';
import swal from '@sweetalert/with-react'
import { contentChanged, createCurriculum, getCurriculumData } from '../../../../actions';

class Tcurriculum extends Component {
    state = {
        content: ''
    }

    componentDidMount(){
        this.props.getCurriculumData(this.props.classId)
    }

    onContentChange(event) {
        this.props.contentChanged(event)
    }

    createCurriculum(event){
        event.preventDefault();        
        this.props.createCurriculum({ classId: this.props.classId, content: this.props.content})
    }

    render() {
        if (this.props.message) {
            swal(`${this.props.message}`);
        }
        if(this.props.content){
            console.log(this.props.content)
        }
        return (
            <div className='container'>
                <form>
                    <ReactQuill
                        modules={Tcurriculum.modules}
                        formats={Tcurriculum.formats}
                        placeholder="body"
                        type="text"
                        value={this.props.content}
                        onChange={this.onContentChange.bind(this)}
                    />  <br />
                    <input type="submit" onClick={this.createCurriculum.bind(this)} className='btn-success postCurriculum' value="Post" />                        
                </form>
            </div>
        )
    }
}

Tcurriculum.modules = {
    toolbar: [
        [{ 'header': '1' }, { 'header': '2' }, { 'header': '3' }, { font: [] }],
        [{ size: [] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        ['link'],
        ['clean'],
        ['code-block']
    ]
}

Tcurriculum.formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet',
    'link', 'code-block'
]

const mapStateToProps = ({ CurriculumReducer }) => {
    const { message, content } = CurriculumReducer;
    return { message, content }
}

export default connect(mapStateToProps, {
    createCurriculum, getCurriculumData, contentChanged
})(Tcurriculum)

// renderHtml()