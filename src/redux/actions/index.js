import * as actionTypes from '../constants/actionTypes';
import movies from '../../api/moviesData';
import dates from '../../api/moviesData'

const receiveMovies = movies => ({
    type: actionTypes.RECEIVE_MOVIES,
    payload: { movies }
})


const receiveDates = dates => ({
    type: actionTypes.RECEIVE_DATES,
    payload : { dates }
})
export const getProductsFromApi = () => dispatch => {
    //shop.getProducts(), fake api request
    dispatch(receiveMovies(movies.getMovies()), receiveDates(dates.getDates()))
}
