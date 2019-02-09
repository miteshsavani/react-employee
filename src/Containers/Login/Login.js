import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';
import { Redirect } from 'react-router-dom';

import Modal from '../../components/UI/Modal/Modal';
import classes from './Login.css';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import Avatar from '../../components/UI/Avatar/Avatar';
import Spinner from '../../components/UI/Spinner/Spinner';
import Aux from '../../hoc/aAux';


class Login extends Component {
    state = {
        loginForm: {
            username: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Enter Username',
                    autoFocus:'autoFocus'
                },
                validatation: {
                    required: true
                },
                value: '',
                valid: false,
                touched: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Enter Password'
                },
                validatation: {
                    required: true
                },
                value: '',
                valid: false,
                touched: false
            }
        }
    }


    inputChangedHandler = (event, inputIdentifier) => {
        const updatedLoginForm = {
            ...this.state.loginForm
        };
        const updatedFormElement = {
            ...updatedLoginForm[inputIdentifier]
        };

        updatedFormElement.value = event.target.value;
        updatedLoginForm[inputIdentifier] = updatedFormElement;
        this.setState({ loginForm: updatedLoginForm });
    }


    loginHandler = (event) => {
        event.preventDefault();
        let username = this.state.loginForm.username.value;
        let password = this.state.loginForm.password.value;

        console.log('username', username);
        console.log('password', password);
        this.props.onAuth(username, password);

    }

    componentDidMount() {
        console.log('Isauth', this.props.isAuthenticated);
    }

    modalClosedHandler = () => {
        this.props.resetError();
    }

    render() {

        let authRedirect = null;
        if (this.props.isAuthenticated) {
            authRedirect = <Redirect to="/country" />
        }

        const formElementsArray = [];
        for (let key in this.state.loginForm) {
            formElementsArray.push({
                id: key,
                config: this.state.loginForm[key]
            });
        }

        let loginButton = (
            <Button click={this.loginHandler}>
                Login
            </Button>
        );

        if (this.props.loading) {
            loginButton = <Spinner />;
        }

        let form = (
            <Aux>
                <Modal show={this.props.error} modalClosed={this.modalClosedHandler}>
                    {this.props.error}
                </Modal>
                <form onSubmit={this.loginHandler}>
                    <div className={classes.imgcontainer}>
                        <Avatar avatarSrc={require('../../assets/img_avatar2.png')} avatarAlt='Avatar' class={classes.avatar} />
                    </div>
                    <div className={classes.container}>
                        {formElementsArray.map(formElement => (
                            <Input
                                key={formElement.id}
                                elementType={formElement.config.elementType}
                                elementConfig={formElement.config.elementConfig}
                                value={formElement.config.value}
                                changed={(event) => this.inputChangedHandler(event, formElement.id)}
                            />
                        ))}
                        {loginButton}
                    </div>
                </form>
            </Aux>
        );

        let page = (
            <div>
                <h2> Daily News Source </h2>
                {form}
            </div>
        );

        console.log('isAuthenticated', this.props.isAuthenticated);
        if (this.props.isAuthenticated) {
            page = (
                <h2>Message is {this.props.status}</h2>
            );
        }

        return (
            <div className={classes.body}>
                {authRedirect}
                {page}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.isAuth,
        error: state.auth.error,
        loading: state.auth.loading
    }
}

const mapStateToDispatch = dispatch => {
    return {
        onAuth: (email, password) => dispatch(actions.AuthLogin(email, password)),
        resetError: () => dispatch(actions.resetError())
    }
}

export default connect(mapStateToProps, mapStateToDispatch)(Login);