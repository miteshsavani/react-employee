
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
            .catch(error => {
                console.log('error on news fetch', error);
                dispatch(newsFetchFailed(error));
            })

    }
}


const fetchTopHeadline = (contryId) => {
    return dispatch => {
        dispatch(fetchTopHeadlinesStart());
        axios.get(`https://newsapi.org/v2/top-headlines?country=${contryId}&apiKey=fd94682fa1b24ff5b9316a250c504b17`)
            .then(response => {
                console.log(response);
                dispatch(fetchTopHeadlinesSuccess(response.data.articles));
            })
            .catch(error => {
                console.log('error on news fetch', error);
                dispatch(fetchTopHeadlinesFailed(error));
            })
    }

}

export const fetchAllNewsSource = (countryId) => {
    return dispatch => {
        dispatch(newsSourceFetchStart());
        axios.get(`https://newsapi.org/v2/sources?language=en&country=${countryId}&apiKey=fd94682fa1b24ff5b9316a250c504b17`)
            .then(response => {
                console.log(response);
                if (response.data.sources.length === 0) {
                    console.log('New Source is blank');
                    dispatch(fetchTopHeadline(countryId));
                }
                else
                    dispatch(onNewsSourceSuccess(response.data.sources));
            })
            .catch(error => {
                console.log('error on news source fetch', error);
                dispatch(newsSourceFetchFailed(error));
            })
    }
}


export const resetNewsSourceandTopHeadline = () => {
    return {
        type: actionTypes.NEWS_RESET
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

const fetchTopHeadlinesStart = () => {
    return {
        type: actionTypes.NEWS_TOP_HEADLINE_START
    }
}

const fetchTopHeadlinesFailed = (error) => {
    return {
        type: actionTypes.NEWS_TOP_HEADLINE_FAILED,
        error: error
    }
}

const fetchTopHeadlinesSuccess = (data) => {
    return {
        type: actionTypes.NEWS_TOP_HEADLINE_SUCESS,
        data: data
    }
}