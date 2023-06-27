import { applyMiddleware, combineReducers, createStore } from "redux";
import { flightReducer } from "./bookflight/bookFlightReducer";
import { composeWithDevTools } from "redux-devtools-extension";



const reducer = combineReducers({
  flight: flightReducer,
});


const store = createStore(reducer, composeWithDevTools(applyMiddleware()));


export default store