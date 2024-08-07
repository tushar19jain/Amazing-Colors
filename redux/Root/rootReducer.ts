import { combineReducers } from "redux";
import {SearchReducers} from "../Reducers/SearchReducers";
import { colorReducers } from "../Reducers/ColorReducer";

export const rootReducer = combineReducers({
    SearchReducers,
    colorReducers
})