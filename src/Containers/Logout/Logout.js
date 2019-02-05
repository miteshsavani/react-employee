import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

class logout extends Component {

    componentDidMount() {
        this.props.logOut();
    }

    render() {
        return <Redirect to="/" />;
    }
}

const mapStateToDispatch = dispatch => {
    return {
        logOut: () => dispatch(actions.onLogout())
    }
}

export default connect(null, mapStateToDispatch)(logout);