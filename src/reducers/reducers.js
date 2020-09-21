/**
 * 
 * @desc Redux reducer
 */

import * as types from './../actions/actions';

/**
 * @desc Initial state / default state value
 */
const initialState = { isAuthenticated : false };

function reducer(state = initialState,action){
    switch(action.type){
        //set state data to initial state and return to action
        case types.LOGIN:
            return Object.assign({}, state, {
                isAuthenticated: action.isAuthenticated,
                loginResponse : action.loginResponse
            });
      
        default:
            return state;
    }
}
export default reducer;
