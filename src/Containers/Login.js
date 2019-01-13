import React, { Component } from 'react';
import './Login.css';
import Input from '../Components/input/input';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            form: {
                username:'',
                password:''
            }
        }
    }
   
    inputChangedHandler = (event, inputName) => {
        const updatedForm = {
            ...this.state.form
        };
        updatedForm[inputName] = event.target.value;
        this.setState({form: updatedForm});
    }
    

    buttonClickHandler = () => {
        console.log('CLicked');
    }

    render() {
        return (
            <div className='body'>

                <h2>Login Form</h2>

                <div className='form'>
                    <div className='imgcontainer'>
                        <img src= {require('../assets/img_avatar2.png')} alt='Avatar' className='avatar' />
                    </div>

                    <div className='container'>
                        <Input type='label' name='uname' value='Username'>
                        <Input 
                            name='uname' 
                            type='text' 
                            placeholder='Enter Username'
                            value = {this.state.username} 
                            changed = {(event) => this.inputChangedHandler(event, 'username')}/>
                        </Input>
                            
                        <Input type='label' name='psw' value='Password'>
                        <Input 
                            name='psw' 
                            type='password' 
                            placeholder='Enter Password' 
                            value= {this.state.password} 
                            changed = {(event) => this.inputChangedHandler(event, 'password')}/>
                        </Input>
                        <Input 
                            label='Login' 
                            type='submit' 
                            click={this.buttonClickHandler}/>
                    </div>

                    <div className='container' style={{ backgroundColor:'#f1f1f1' }} >
                        <Input label='Cancel' type='submit' class='cancelbtn' />
                    </div>
                </div>

            </div>
        )
    }
}

export default Login;