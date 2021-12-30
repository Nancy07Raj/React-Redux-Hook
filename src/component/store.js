import  {createStore} from "redux";
import { combineReducers } from "redux"
import cakeReducer from "./cake/cakeReducer";
import IceReducer from "./Icecream/IcecreamReducer";

const rootReducer = combineReducers({
    cake : cakeReducer,
    Ice : IceReducer
})

const store = createStore(rootReducer);

export default store;