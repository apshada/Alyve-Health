import _ from 'lodash'
import { combineReducers } from 'redux'
import * as actionTypes from "../constants/actionTypes";

const byId = (state = {}, action) => {

    switch(action.type) {
        case actionTypes.RECEIVE_DATES:
            return {
                ...state,
                ...action.payload.dates.reduce((obj, product) => {
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
        case actionTypes.RECEIVE_DATES:
            let ids = action.payload.dates.map(product => product.id)
            return [...state, ...ids]
        default:
            return state
    }
}

const dates= combineReducers({ byId, allIds })
export default dates

//utility functions
export const getDates = (dates, id) =>dates.byId[id]

export const getAllDates = dates => _.values(dates.byId)

export const getAlldatesId = dates => dates.allIds
