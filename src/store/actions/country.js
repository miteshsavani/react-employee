
import axios from 'axios';
import * as actionTypes from './actionTypes';




export const fetchAllCountry = (email, password) => {
    return dispatch => {
        dispatch(countryFetchStart());
        axios.get('https://restcountries.eu/rest/v2/all')
            .then(response => {
                console.log(response);
                dispatch(onGetAllCountry(response.data));
            })
            .catch( error => {
                dispatch(countryFetchFailed(error))
            })
    }
}

const countryFetchStart = () => {
    return {
        type: actionTypes.COUNTRY_FETCH_START
    }
}

const countryFetchFailed = (error) => {
    return {
        type: actionTypes.COUNTRY_FETCH_FAILED,
        error: error
    }
}
const onGetAllCountry = (data) => {
    return {
        type: actionTypes.COUNTRY_FETCH_SUCCESS,
        data: data
    }
}
