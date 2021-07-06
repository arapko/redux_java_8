import {useState} from "react";
import {applyMiddleware, combineReducers, createStore} from "redux";
import {countReducer} from "../redux/countReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import weatherReducer from "../redux/weatherReducer";
import {asyncWeather} from "../redux/apiActions";

export function Form(){
    const [city,setCity] = useState();
    const reducers = combineReducers({
        counts:countReducer,
        weather:weatherReducer
    })

    const store = createStore(reducers,{}, composeWithDevTools(applyMiddleware(thunk)));

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