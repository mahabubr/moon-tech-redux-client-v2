import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
// import logger from "redux-logger";
import rootReducer from "./reducers/rootReducer";
import cartCounter from "./middleWares/cartCounter";
import thunk from "redux-thunk";
import logger from "redux-logger";


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(cartCounter, thunk)));

export default store;
