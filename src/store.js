
import { applyMiddleware, createStore } from "redux";
import { todoReducer } from "./reducers/todoReducers";
import thunk from "redux-thunk";
import { combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";



const reducers = combineReducers({
    todos: todoReducer
})

const middleware = [thunk];

const store = createStore(reducers, composeWithDevTools(applyMiddleware(...middleware)));

export default store;

