/**
 * 
 * @desc Redux store
 */

import { createStore,combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import reducer from './../reducers/reducers'

export default createStore(
    combineReducers({reducer}),
  
    compose(
      applyMiddleware(thunk)
    )
)