
import axios from 'axios';
import * as actionTypes from './actionTypes';


export const onLogin = () => {
    return {
        type: actionTypes.ON_LOGIN_SUCCESS
    }
}

export const AuthLogin = (email, password) => {
    return dispatch => {
        dispatch(loginStart());
        axios.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyB-OXTM8RhZPMsyaqv6Q6pRRPrfxhCrkzo',{
            email: email,
            password: password
            })
            .then(response => {
                console.log(response);
                dispatch(onLogin());
            })
            .catch( error => {
                dispatch(loginFailed('There some problem on Login'));
            })
    }
}


const loginStart = () => {
    return {
        type: actionTypes.ON_LOGIN_START
    }
}

export const resetError = () => {
    return {
        type: actionTypes.ON_RESET_ERROR
    }
}

const loginFailed = (error) => {
    return {
        type: actionTypes.ON_LOGIN_FAILED,
        error: error
    }
}

export const onLogout = () => {
    return {
        type: actionTypes.ON_LOGOUT
    }
}