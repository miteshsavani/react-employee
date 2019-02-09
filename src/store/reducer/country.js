
import { updatedObject } from '../utility';
import * as actionType from '../actions/actionTypes';


const intialState = {
    countries:[],
    loading:false,
    error:null
}

const setAllCountry = (state, data) => {
    return updatedObject(state, {countries: data, loading: false, error: null});
}


const fetchCountry = (state = intialState, action) => {

    switch (action.type) {
        case actionType.COUNTRY_FETCH_SUCCESS:
            return setAllCountry(state, action.data);
        case actionType.COUNTRY_FETCH_START:
            return {
                ...state,
                loading: true,
                error: null
            }
        case actionType.COUNTRY_FETCH_FAILED:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default:
            return state;
    }
}

export default fetchCountry;