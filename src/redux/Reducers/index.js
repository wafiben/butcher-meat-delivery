import { combineReducers } from "redux";
import listReducer from "./listOfProduct";
const rootReducer = combineReducers({ listReducer: listReducer });
export default rootReducer;
