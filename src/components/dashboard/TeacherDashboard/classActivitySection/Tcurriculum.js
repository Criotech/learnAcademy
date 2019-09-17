import React, { Component } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import rendeeHTML from 'react-render-html'

class Tcurriculum extends Component {
    render() {
        return (
            <div className='container'>
                <form>
                    <ReactQuill
                        modules={Tcurriculum.modules}
                        formats={Tcurriculum.formats}
                        placeholder="body"
                        type="text"
                    />  <br />
                    <input type="submit" className='btn-success postCurriculum' value="Post" />                        
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

export default Tcurriculum
// renderHtml()