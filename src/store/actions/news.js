
import axios from 'axios';
import * as actionTypes from './actionTypes';


export const fetchAllNews = () => {
    return dispatch => {
        axios.post('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=fd94682fa1b24ff5b9316a250c504b17')
            .then(response => {
                console.log(response);
                dispatch(onGetNewsSuccess(response.data.articles));
            })
            .catch( error => {
                dispatch(onGetNewsSuccess([].push(null)));
            })
    }
}

export const onGetNewsSuccess = (allNews) => {
    return {
        type: actionTypes.ON_NEWS_GET_SUCCESS,
        data: allNews
    }
}
