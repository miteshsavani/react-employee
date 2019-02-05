
import { updatedObject } from '../utility';
import * as actionType from '../actions/actionTypes';


const intialState = {
    isAuth: true,
    message: null
}

const ToLogIn = (state, message) => {
    return updatedObject(state, {isAuth: true, message: message});
}

const ToLogout = (state, message) => {
    return updatedObject(state, {isAuth: false, message: message});
}

const auth = (state = intialState, action) => {

    switch (action.type) {
        case actionType.ON_LOGIN:
            return ToLogIn(state, action.message);
        case actionType.ON_LOGOUT: 
            return ToLogout(state, action.message);
        default:
            return state;
    }
}

export default auth;