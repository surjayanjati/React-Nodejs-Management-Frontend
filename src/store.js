// Importing The legacy Store To create The Store------------------------------------------->
import { legacy_createStore } from "redux";

// Importing The rootReducer----------------------------------------------------------------->
import rootReducer from "./reducers/rootReducer";


const store=legacy_createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// Exporting The Store----------------------------------------------------------------------->
export default store;
