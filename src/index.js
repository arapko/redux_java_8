// Observer - Наблюдатель

import {createStore} from "./createStore";
import {countReducer} from "./countReducer";
import {ADD, SUB} from "./types";

//import {createStore} from "redux";

const addBtn = document.getElementById('add');
const subBtn = document.getElementById('sub');
const counterText = document.getElementById('counter');
//Ctrl+Shift+Alt+L

const store = createStore(countReducer,0);

addBtn.addEventListener('click', () => {
    store.dispatch({type:ADD});
});

subBtn.addEventListener('click', () => {
    store.dispatch({type:SUB});
});

store.subscribe(()=>{
    counterText.textContent = store.getState().toString();
})
