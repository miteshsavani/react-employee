
import { updatedObject } from '../utility';
import * as actionType from '../actions/actionTypes';


const intialState = {
    allNews:[]
}

const setNews = (state, data) => {
    return updatedObject(state, {allNews: data});
}


const fetchNews = (state = intialState, action) => {

    switch (action.type) {
        case actionType.ON_NEWS_GET_SUCCESS:
            return setNews(state, action.data);
        default:
            return state;
    }
}

export default fetchNews;