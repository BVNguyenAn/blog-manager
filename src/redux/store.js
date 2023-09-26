import { legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
import { applyMiddleware  } from "redux";
import { reducer } from "./reducer/reducer";


const middleware = [thunk];
const loadState = () => {
    const stateString = localStorage.getItem("Blogs");
    if(stateString !== null){
            return JSON.parse(stateString);
    }else{
      return []
    }
};
const persistedState = {
  blogs: loadState()

};
  const store = createStore(reducer, persistedState ,applyMiddleware(...middleware));
export default store