
import axios from 'axios';
import * as actionTypes from './actionTypes';


export const onLogin = (message) => {
    return {
        type: actionTypes.ON_LOGIN,
        message: message
    }
}

export const AuthLogin = (email, password) => {
    return dispatch => {
        axios.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyB-OXTM8RhZPMsyaqv6Q6pRRPrfxhCrkzo',{
            email: email,
            password: password
            })
            .then(response => {
                console.log(response);
                dispatch(onLogin("Success"));
            })
            .catch( error => {
                dispatch(onLogout("Failed"));
            })
    }
}

export const onLogout = (message) => {
    return {
        type: actionTypes.ON_LOGOUT,
        message: message
    }
}