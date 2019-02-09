
import axios from 'axios';
import * as actionTypes from './actionTypes';


export const fetchAllNews = (newsId) => {
    return dispatch => {
        dispatch(newsFetchStart());
        axios.get(`https://newsapi.org/v2/top-headlines?sources=${newsId}&apiKey=fd94682fa1b24ff5b9316a250c504b17`)
            .then(response => {
                console.log(response);
                dispatch(onGetNewsSuccess(response.data.articles));
            })
            .catch( error => {
                console.log('error on news fetch', error);
                dispatch(newsFetchFailed(error));
            })
    }
}

export const fetchAllNewsSource = (countryId) => {
    return dispatch => {
        dispatch(newsSourceFetchStart());
        axios.get(`https://newsapi.org/v2/sources?language=en&country=${countryId}&apiKey=fd94682fa1b24ff5b9316a250c504b17`)
            .then(response => {
                console.log(response);
                dispatch(onNewsSourceSuccess(response.data.sources));
            })
            .catch( error => {
                console.log('error on news source fetch', error);
                dispatch(newsSourceFetchFailed(error));
            })
    }
}



export const onGetNewsSuccess = (allNews) => {
    return {
        type: actionTypes.NEWS_FETCH_SUCCESS,
        data: allNews
    }
}


export const onNewsSourceSuccess = (allNewsSource) => {
    return {
        type: actionTypes.NEWS_SOURCE_FETCH_SUCCESS,
        data: allNewsSource
    }
}

const newsSourceFetchStart = () => {
    return {
        type: actionTypes.NEWS_SOURCE_FETCH_START
    }
}

const newsSourceFetchFailed = (error) => {
    return {
        type: actionTypes.NEWS_SOURCE_FETCH_FAILED,
        error: error
    }
}

const newsFetchStart = () => {
    return {
        type: actionTypes.NEWS_FETCH_START
    }
}

const newsFetchFailed = (error) => {
    return {
        type: actionTypes.NEWS_FETCH_FAILED,
        error: error
    }
}