import {GET_WEATHER_FAILURE, GET_WEATHER_LOADING, GET_WEATHER_SUCCESS} from "./types";

const initialState = {
    data: null,
    loading:false,
    error:null
}

export default function weatherReducer(state=initialState,action){
    switch (action.type){
        case GET_WEATHER_LOADING:
            return{
                ...state,
                loading:true
            }
        case GET_WEATHER_SUCCESS:
            const {data} = action.payload;
            return {
                ...state,
                data,
                loading: false
            }
        case GET_WEATHER_FAILURE:
            const {error} = action.payload;
            return {
                ...this.state,
                error,
                loading: false
            }
        default:
            return state;
    }
}