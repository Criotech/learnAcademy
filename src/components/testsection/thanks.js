import React, { Component } from 'react';

class Thanks extends Component {

    render() {
        return (
            <div>
                <div style={{ marginTop: 20, display: this.props.display }} className="jumbotron">
                    <h1 className="display-4" style={{textAlign: 'center'}}><b> Thanks for submitting </b></h1>
                
                </div>
            </div>
        )
    }
}


export default Thanks