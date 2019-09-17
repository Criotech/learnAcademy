import React, { Component } from 'react'
import TlectureList from './TlectureList'

class Tlecture extends Component {
    render() {
        return (
            <div className="container">
                <form>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Lecture title" aria-describedby="basic-addon2" />
                            <div className="input-group-append">
                                <span className="input-group-text" id="basic-addon2">Lecture title</span>
                            </div>
                    </div>

                    <div className="input-group mb-3">
                        <input type="file" className="form-control" placeholder="Upload Video" aria-describedby="basic-addon2" />
                            <div className="input-group-append">
                            </div>
                    </div>

                    <input type="submit" className='btn-success postCurriculum' value="Post" />                        
                </form>

                <hr/>

            <TlectureList />
            </div>
                )
    }
}

export default Tlecture
