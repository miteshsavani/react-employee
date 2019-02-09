
import { updatedObject } from '../utility';
import * as actionType from '../actions/actionTypes';


const intialState = {
    allNews: [],
    allNewsSource: [],
    loading: false,
    error: null
}

const setNews = (state, data) => {
    return updatedObject(state, { allNews: data, loading: false, error: null });
}

const setNewsSource = (state, data) => {
    return updatedObject(state, { allNewsSource: data,  loading: false, error: null });
}


const fetchNews = (state = intialState, action) => {

    switch (action.type) {
        case actionType.NEWS_FETCH_SUCCESS:
            return setNews(state, action.data);
        case actionType.NEWS_SOURCE_FETCH_SUCCESS:
            return setNewsSource(state, action.data);
        case actionType.NEWS_SOURCE_FETCH_START:
        case actionType.NEWS_FETCH_START:
            return {
                ...state,
                loading: true,
                error: null
            }
        case actionType.NEWS_SOURCE_FETCH_FAILED:
        case actionType.NEWS_FETCH_FAILED:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default:
            return state;
    }
}

export default fetchNews;