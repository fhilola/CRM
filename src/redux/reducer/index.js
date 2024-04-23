import { combineReducers } from "redux";

import createReducer from "./createReducer";
import { groupReducer, roomReducer, subjectReducer, userReducer } from "./getReducer";

const rootReducer = combineReducers({
    userCreation: createReducer,
    getUser: userReducer,
    getGroup: groupReducer,
    getSubjects: subjectReducer,
    getRooms: roomReducer
});

export default rootReducer