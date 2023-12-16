import { applyMiddleware, combineReducers, legacy_createStore } from "redux";

import { thunk } from "redux-thunk";
import { reducer as userReducer } from "./userReducer/reducer";

import {reducer as taskReducer} from './taskReducer/reducer'

const rootReducer = combineReducers({
    taskReducer,
    userReducer

});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
