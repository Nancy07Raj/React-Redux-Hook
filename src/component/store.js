import  {createStore} from "redux";
// import { combineReducers } from "redux"
// import cakeReducer from "./cake/cakeReducer";
// import IceReducer from "./Icecream/IcecreamReducer";
import BlockReducer from "./Ludo/BlockReducer";


// const rootReducer = combineReducers({
//     cake : cakeReducer,
//     Ice : IceReducer
// })

const store = createStore(BlockReducer);
store.subscribe(()=>console.log(store.getState()))

export default store;