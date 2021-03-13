
import categoriesReducer from "./reducers/CategoriesReducer";
import { createStore, applyMiddleware,combineReducers } from "redux";
import thunk from "redux-thunk";


const AppReducer = combineReducers({
    categoriesReducer,
});


export const createAppStore = 
    createStore(AppReducer, applyMiddleware(thunk, ));