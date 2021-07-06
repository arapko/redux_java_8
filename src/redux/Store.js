import {applyMiddleware, combineReducers, createStore} from "redux";
import {countReducer} from "./countReducer";
import weatherReducer from "./weatherReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import locationReducer from "./locationReducer";

export class Store{
    static #instance;

    static useStore(){
        if(!this.#instance){
            const reducers = combineReducers({
                counts:countReducer,
                weather:weatherReducer,
                location: locationReducer
            })
            this.#instance = createStore(reducers,
                {},
                composeWithDevTools(applyMiddleware(thunk)));
        }
        return this.#instance;
    }
}