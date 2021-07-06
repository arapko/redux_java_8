// Observer - Наблюдатель

//import {createStore} from "./createStore";
/*import {countReducer} from "./redux/countReducer";
import {ADD, SUB} from "./redux/types";

import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
const addBtn = document.getElementById('add');
const subBtn = document.getElementById('sub');
const counterText = document.getElementById('counter');*/
//Ctrl+Shift+Alt+L

/*const store = createStore(countReducer,0, composeWithDevTools(applyMiddleware(thunk)));

addBtn.addEventListener('click', () => {
    store.dispatch({type:ADD});
});

subBtn.addEventListener('click', () => {
    store.dispatch({type:SUB});
});

store.subscribe(()=>{
    counterText.textContent = store.getState().toString();
})*/

import * as ReactDOM from "react-dom";
import {AppComp} from "./components/AppComp";

ReactDOM.render(<AppComp/>,
    document.getElementById("root")
)
