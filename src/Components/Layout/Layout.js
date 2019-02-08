import React, { Component } from 'react';

import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Aux from '../../hoc/aAux';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import classes from './Layout.css';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {

    state = {
        showSideDrawer: false
    }

    sideDrawerCloseHandler = () => {
        this.setState({ showSideDrawer: false })
    }

    sideDrawerToggleHandler = () => {
        console.log('toogled');
        this.setState((prevState) => { 
            return {
                showSideDrawer: !prevState.showSideDrawer
            }; 
        });
    }

    render() {

        let invalidRedirect = null;
        if (!this.props.isAuthenticated) {
            invalidRedirect = <Redirect to="/" />
        }

        return (
            <Aux>
                {invalidRedirect}
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
                <SideDrawer
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerCloseHandler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.isAuth,
        status: state.auth.message
    }
}

export default connect(mapStateToProps)(Layout);