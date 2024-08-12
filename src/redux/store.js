import { createStore } from "@reduxjs/toolkit";
import shopReducer from "./reducers";
const store = createStore(shopReducer);
export default store;
