import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function tacoReducer(state = initialState.tacos, action) {
    switch(action.type) {
        case types.CREATE_TACO_SUCCESS: 
            return [
                ...state,
                Object.assign({}, action.taco)
            ];
        default:
            return state;
    }
}