import { combineReducers } from 'redux'
import auth from './auth'
import fetchNews from './fetchNews'

export default combineReducers({
    auth,
    fetchNews
})