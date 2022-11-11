import { legacy_createStore as createStore } from "redux";
import { combineReducers,applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import { authreducer } from "./Auth/authreducer";
import { appreducer } from "./App/appreducer";

const store=createStore(combineReducers({authreducer,appreducer}),applyMiddleware(thunk));

export {store};