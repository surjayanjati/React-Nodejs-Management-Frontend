// Importing The Combine Reducers to Combine all The reducers---------------------->
import { combineReducers } from "redux";
// Importing The Reducers---------------------------------------------------------->
import { managementReducer } from "./managementReducers";

const rootReducer=combineReducers({managementReducer});

// Exporting The rootReducer-------------------------------------------------------->
export default rootReducer;