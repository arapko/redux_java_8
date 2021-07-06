import {
    GET_LOCATION_FAILURE,
    GET_LOCATION_LOADING,
    GET_LOCATION_SUCCESS
} from "./types";

const initialState = {
    data: null,
    loading:false,
    error:null
}

export default function locationReducer(state=initialState,action){
    switch (action.type){
        case GET_LOCATION_LOADING:
            return{
                ...state,
                loading:true
            }
        case GET_LOCATION_SUCCESS:
            const {data} = action.payload;
            return {
                ...state,
                data,
                loading: false
            }
        case GET_LOCATION_FAILURE:
            const {error} = action.payload;
            return {
                ...state,
                error,
                loading: false
            }
        default:
            return state;
    }
}