import {ADD, SUB} from "./types";

const initialState = {count:0}

export function countReducer(state=initialState,action){
    if(action.type===ADD){
        const res = state.count++;
        return {...state, count: res};
    } else if(action.type===SUB){
        const res = state.count--;
        return {...state, count: res};
    }
    return state;
}