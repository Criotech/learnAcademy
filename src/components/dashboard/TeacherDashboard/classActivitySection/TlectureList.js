import React, { Component } from 'react'

class TlectureList extends Component {
    render() {
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                        <th scope="col"></th>
                        <th scope="col" style={{color: '#28A745'}}>Lecture title</th>
                        <th scope="col" style={{color: '#28A745'}}>Delete lecture</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style={{cursor: 'pointer'}}>
                        <th style={{color: '#28A745'}}>lecture 1</th>
                        <td style={{fontWeight: 'bold', color: '#28A745' }}> <i style={{ paddingLeft: 5, color: '#28A745'}} className="fa fa-stop-circle-o" aria-hidden="true"></i>  Quadratic Equation</td>
                        <td><i style={{color: 'red', fontSize: 25}} className="fa fa-trash" aria-hidden="true"></i></td>
                        </tr>
                        <tr style={{cursor: 'pointer'}}>
                        <th style={{color: '#28A745'}}>lecture 2</th>
                        <td style={{fontWeight: 'bold', color: '#28A745' }}> <i style={{color: 'red', paddingLeft: 5 }} className="fa fa-file-pdf-o" aria-hidden="true"></i>  Partial Fractions</td>
                        <td><i style={{color: '#28A745', fontSize: 25}} className="fa fa-trash" aria-hidden="true"></i></td>      
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default TlectureList
