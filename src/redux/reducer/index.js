import { combineReducers } from "redux";
import { userReducer } from "./userReducer";

const rootReducer = combineReducers({
    userCreation: userReducer
});

export default rootReducer