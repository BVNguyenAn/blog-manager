import { legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
import { applyMiddleware  } from "redux";
import { reducer } from "./reducer/reducer";


const middleware = [thunk];
const store = createStore(reducer, applyMiddleware(...middleware));
console.log(store.getState());
export default store