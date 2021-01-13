// Redux
import { createStore, applyMiddleware } from "redux";
// Redux Middlewares
import thunk from "redux-thunk";
// Redux Dev extension
import { composeWithDevTools } from "redux-devtools-extension";
// Reducers
import reducers from "./reducers";

const middlewares = [thunk];

const store = (initialState) =>
  createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(...middlewares))
  );

export default store;
