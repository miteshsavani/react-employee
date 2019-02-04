import React, { Component } from 'react';
import Button from '../../Components/UI/Button/Button';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';


class Dashboard extends Component {

    logOutHandler = () => {
            this.props.logOut();
    }

    render() {   
        let invalidRedirect = null;
        if (!this.props.isAuthenticated) {
            console.log('Logout.......');
            invalidRedirect = <Redirect to="/" />
        }
        return (
            <div>
                {invalidRedirect}
                <h3> Dashboard </h3>
                <Button click={this.logOutHandler}>
                        Logout
                </Button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.isAuth,
        status: state.message
    }
}

const mapStateToDispatch = dispatch => {
    return {
        logOut: () => dispatch(actions.onLogout())
    }
}

export default connect(mapStateToProps, mapStateToDispatch)(Dashboard);