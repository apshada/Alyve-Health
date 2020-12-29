import _ from 'lodash'
import { combineReducers } from 'redux'
import * as actionTypes from "../constants/actionTypes";

const byId = (state = {}, action) => {

    switch(action.type) {
        case actionTypes.RECEIVE_MOVIES:
            return {
                ...state,
                ...action.payload.movies.reduce((obj, product) => {
                    obj[product.id] = product
                    return obj
                }, {})
            }
        default:
            return state
    }
}

const allIds = (state = [], action) => {

     switch(action.type) {
        case actionTypes.RECEIVE_MOVIES:
            let ids = action.payload.movies.map(product => product.id)
            return [...state, ...ids]
        default:
            return state
    }
}


const selectedQuantityById = (state = {}, action) => {

    switch(action.type) {

        case actionTypes.RECEIVE_MOVIES:
            return {
                ...state,
                ...action.payload.movies.reduce((obj, product) => {
                    obj[product.id] = 1
                    return obj
                }, {})
            }

        // case actionTypes.INCREMENT_QUANTITY:
        //     return {
        //         ...state,
        //         [action.payload.productId]: state[action.payload.productId] + 1
        //     }

        // case actionTypes.DECREMENT_QUANTITY:

        //     if(state[action.payload.productId] === 1)
        //     return state
            
        //     return {
        //         ...state,
        //         [action.payload.productId]: state[action.payload.productId] - 1
        //     }

        // case actionTypes.CHECKOUT:
        //      return {
        //         ...state,
        //         ...action.payload.allProductsId.reduce((obj, productId) => {
        //             obj[productId] = 1
        //             return obj
        //         }, {})
        //     }

        default:
            return state
    }
}

const movies = combineReducers({ byId, allIds, selectedQuantityById })
export default movies

//utility functions
export const getMovies = (movies, id) => movies.byId[id]

export const getAllMovies = movies => _.values(movies.byId)

export const getAllMoviesId = movies => movies.allIds

export const getSelectedQuantity = (movies, id) =>
movies.selectedQuantityById[id]