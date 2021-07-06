import {
    GET_LOCATION_FAILURE,
    GET_LOCATION_LOADING,
    GET_LOCATION_SUCCESS,
    GET_WEATHER_FAILURE,
    GET_WEATHER_LOADING,
    GET_WEATHER_SUCCESS
} from "./types";
import Api from "../api/Api";

export function asyncWeather(city){
    return async function(dispatch){
        dispatch(getWeatherLoading());
        try{
            const json = await Api.getWeatherInCity(
                city,
                "c3bd24f13cecf13f96cfdc182bc8d4e8"
            );
            dispatch(getWeatherSuccess(json));
        } catch (e) {
            dispatch(getWeatherError(e));
        }
    }
}

export function getWeatherLoading(){
    return{
        type:GET_WEATHER_LOADING
    }
}
export function getWeatherSuccess(data){
    return{
        type:GET_WEATHER_SUCCESS,
        payload:{data}
    }
}
export function getWeatherError(error){
    return{
        type:GET_WEATHER_FAILURE,
        payload:{error}
    }
}

export function asyncLocation(latitude,longitude){
    return async function(dispatch){
        dispatch(getLocationLoading());
        try{
            const json = await Api.getCityByLocation(
                latitude,longitude
            );
            dispatch(getLocationSuccess(json));
        } catch (e) {
            dispatch(getLocationError(e));
        }
    }
}

export function getLocationLoading(){
    return{
        type:GET_LOCATION_LOADING
    }
}
export function getLocationSuccess(data){
    return{
        type:GET_LOCATION_SUCCESS,
        payload:{data}
    }
}
export function getLocationError(error){
    return{
        type:GET_LOCATION_FAILURE,
        payload:{error}
    }
}