import { combineReducers } from 'redux'
import movies from './moviesReducer'
import dates from './datesReducer'
const rootReducer = combineReducers({
    movies,
    dates
})

export default rootReducer
