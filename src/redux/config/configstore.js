import { createStore } from "redux";
import { combineReducers } from "redux";
import notice from "../modules/notice"

const rootReducer = combineReducers({
    notice,

});
const store = createStore(rootReducer);

export default store;