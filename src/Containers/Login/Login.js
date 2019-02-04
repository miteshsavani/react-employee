import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';
import { Redirect } from 'react-router-dom';

import './Login.css';
import Input from '../../Components/UI/Input/Input';
import Button from '../../Components/UI/Button/Button';
import Avatar from '../../Components/UI/Avatar/Avatar';
import axios from 'axios';

class Login extends Component {
    state = {
        loginForm: {
            username: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Enter Username'
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

        

       /*  axios.get('/Users.json')
            .then(response => {
                console.log('response data is', response.data);
            })

        console.log('Login CLicked', username, password); */
    }

    componentDidMount() {
        console.log('Isauth', this.props.isAuthenticated);
    }

    render() {

        let authRedirect = null;
        if (this.props.isAuthenticated) {
            console.log('TRUEEEE');
            authRedirect = <Redirect to="/dashboard" />
        }

        const formElementsArray = [];
        for (let key in this.state.loginForm) {
            formElementsArray.push({
                id: key,
                config: this.state.loginForm[key]
            });
        }

        let form = (
            <form onSubmit={this.loginHandler}>
                <div className='imgcontainer'>
                    <Avatar avatarSrc={require('../../assets/img_avatar2.png')} avatarAlt='Avatar' class='avatar' />
                </div>
                <div className='container'>
                    {formElementsArray.map(formElement => (
                        <Input
                            key={formElement.id}
                            elementType={formElement.config.elementType}
                            elementConfig={formElement.config.elementConfig}
                            value={formElement.config.value}
                            changed={(event) => this.inputChangedHandler(event, formElement.id)}
                        />
                    ))}
                    <Button click={this.loginHandler}>
                        Login
                            </Button>
                </div>
                <div className='container' style={{ backgroundColor: '#f1f1f1' }} >
                    <Button class='cancelbtn'>
                        Cancel
                            </Button>
                </div>
            </form>
        );

        let page = (
            <div>
                <h2>Login Form </h2>
                { form }
            </div>
        );

        console.log('isAuthenticated', this.props.isAuthenticated);
        if (this.props.isAuthenticated) {
            page = (
                <h2>Message is {this.props.status}</h2>
            );
        }

        return (
            <div className='body'>
                {authRedirect}
                {page}
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
        onAuth: (email, password) => dispatch(actions.AuthLogin(email, password))
    }
}

export default connect(mapStateToProps, mapStateToDispatch)(Login);