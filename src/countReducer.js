import {ADD, SUB} from "./types";

export function countReducer(state,action){
    if(action.type===ADD){
        return state+1;
    } else if(action.type===SUB){
        return state-1;
    }
    return state;
}