import React, { Component } from 'react'

export default class Slecture extends Component {
    render() {
        return (
                <div style={{ backgroundColor: '#E9EBEE' }} className='chatContainer'>
                <div className="chattop">
                    <span className="classNo">
                        Lectures
                    </span>

                </div>
                <hr />

                <div className="chat">
                    <div className="announcementList">
                         <table className="table">
                   
                    <tbody>
                        <tr className='some' style={{cursor: 'pointer'}}>
                        <th>lecture 1</th>
                        <td style={{fontWeight: 'bold'}}> <i style={{color: 'red', paddingLeft: 5}} class="fa fa-play" aria-hidden="true"></i>  Quadratic Equation</td>
                        </tr>
                        <tr className='some' style={{cursor: 'pointer'}}>
                        <th>lecture 2</th>
                        <td style={{fontWeight: 'bold'}}> <i style={{color: 'red', paddingLeft: 5}} class="fa fa-play" aria-hidden="true"></i>  Partial Fractions</td>
                        </tr>
                    </tbody>
                </table>
                    </div>

                   
                </div>
            </div>
        )
    }
}
