import React, { Component } from 'react';
import './Login.css';
import Input from '../Components/UI/Input/Input';
import Button from '../Components/UI/Button/Button';

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
        this.setState({ loginForm:  updatedLoginForm});
    }


    loginHandler = (event) => {
        event.preventDefault();
        let username = this.state.loginForm.username.value;
        let password = this.state.loginForm.password.value;
        console.log('Login CLicked',username, password);
    }

    render() {
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
                    <img src={require('../assets/img_avatar2.png')} alt='Avatar' className='avatar' />
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

        return (
            <div className='body'>

                <h2>Login Form</h2>
                    {form}
                {/* <div className='form'>
                    <div className='imgcontainer'>
                        <img src={require('../assets/img_avatar2.png')} alt='Avatar' className='avatar' />
                    </div>

                    <div className='container'>
                        <Input type='label' name='uname' value='Username'>
                            <Input
                                name='uname'
                                type='text'
                                placeholder='Enter Username'
                                value={this.state.username}
                                changed={(event) => this.inputChangedHandler(event, 'username')} />
                        </Input>

                        <Input type='label' name='psw' value='Password'>
                            <Input
                                name='psw'
                                type='password'
                                placeholder='Enter Password'
                                value={this.state.password}
                                changed={(event) => this.inputChangedHandler(event, 'password')} />
                        </Input>
                        <Input
                            label='Login'
                            type='submit'
                            click={this.buttonClickHandler} />
                    </div>

                    <div className='container' style={{ backgroundColor: '#f1f1f1' }} >
                        <Input label='Cancel' type='submit' class='cancelbtn' />
                    </div>
                </div> */}

            </div>
        )
    }
}

export default Login;