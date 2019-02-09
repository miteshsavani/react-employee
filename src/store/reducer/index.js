import { combineReducers } from 'redux'
import auth from './auth'
import fetchNews from './fetchNews'
import fetchCountry from './country'

export default combineReducers({
    auth,
    fetchNews,
    fetchCountry
})