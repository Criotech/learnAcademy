import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function (ComposedComponent) {
    class Authenticate extends Component {
        componentWillMount() {
            if (!this.props.isAuthenticated) {
                 this.props.history.push(`/login`)
            }
        }

        componentWillUpdate(nextProps) {
            if (!nextProps.isAuthenticated) {
                 this.props.history.push(`/`)
            }
        }

        render() {
            return (
                <ComposedComponent {...this.props} />
            )
        }
    }


    const mapStateToProps = ({ auth }) => {
        const { isAuthenticated } = auth;
        console.log(isAuthenticated)
        return { isAuthenticated }
    }
    return connect(mapStateToProps)(Authenticate);
}
