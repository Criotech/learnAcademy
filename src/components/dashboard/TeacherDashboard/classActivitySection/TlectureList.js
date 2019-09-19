import React, { Component } from 'react'

class TlectureList extends Component {
    render() {
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                        <th scope="col"></th>
                        <th scope="col">Lecture title</th>
                        <th scope="col" style={{color: '#28A745'}}>Delete lecture</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style={{cursor: 'pointer'}}>
                        <th>lecture 1</th>
                        <td style={{fontWeight: 'bold'}}> <i style={{color: 'red', paddingLeft: 5}} class="fa fa-play" aria-hidden="true"></i>  Quadratic Equation</td>
                        <td><i style={{color: 'red', fontSize: 25}} className="fa fa-trash" aria-hidden="true"></i></td>
                        </tr>
                        <tr style={{cursor: 'pointer'}}>
                        <th>lecture 2</th>
                        <td style={{fontWeight: 'bold'}}> <i style={{color: 'red', paddingLeft: 5}} class="fa fa-play" aria-hidden="true"></i>  Partial Fractions</td>
                        <td><i style={{color: 'red', fontSize: 25}} className="fa fa-trash" aria-hidden="true"></i></td>      
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default TlectureList
