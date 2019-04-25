import { combineReducers } from "redux";
import docReducer  from "./docReducer";

const rootReducers = combineReducers({
    docReducer: docReducer,
});

export default rootReducers;