import {useState} from "react";
import {applyMiddleware, combineReducers, createStore} from "redux";
import {countReducer} from "../redux/countReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import weatherReducer from "../redux/weatherReducer";
import {asyncWeather} from "../redux/apiActions";
import {Store} from "../redux/Store";

export function Form(){
    const [city,setCity] = useState();
    const store = Store.useStore();

    const handleSubmit = (event)=>{
        event.preventDefault();
        store.dispatch(asyncWeather(city))
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                City:
                <input
                    type="text"
                    value={city}
                    onChange={event => setCity(event.target.value)}
                />
            </label>
            <input
                type="submit"
                value="Submit"
            />

            <span></span>
        </form>
    )
}