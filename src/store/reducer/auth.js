
import { updatedObject } from '../utility';
import * as actionType from '../actions/actionTypes';

const intialState = {
    isAuth: false,
    error: null,
    loading: false
}

const ToLogIn = (state, message) => {
    return updatedObject(state, {isAuth: true, error: null ,loading: false});
}

const ToLogout = (state, message) => {
    return updatedObject(state, {isAuth: false, error:null, loading: false});
}

const auth = (state = intialState, action) => {

    switch (action.type) {
        case actionType.ON_LOGIN_SUCCESS:
            return ToLogIn(state);
        case actionType.ON_LOGIN_FAILED:
            return {
                ...state,
                error: action.error,
                loading: false
            }
        case actionType.ON_LOGIN_START:
            return {
                ...state,
                error: null,
                loading: true
            }
        case actionType.ON_RESET_ERROR: {
            return {
                ...state,
                error: null,
                loading: false
            }
        }
        case actionType.ON_LOGOUT: 
            return ToLogout(state);
        default:
            return state;
    }
}

export default auth;