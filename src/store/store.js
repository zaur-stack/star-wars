import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { thunk } from "redux-thunk";
import { applyMiddleware } from "redux";
import favouriteReducer from './reducers/favouriteReducer'
import { setLocalStorage } from "../utils/localStorage";

const reducers = combineReducers({
  favouriteReducer: favouriteReducer 
})

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
)

store.subscribe(() =>{
  setLocalStorage('store', store.getState().favouriteReducer)
})

export default store