import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers";
import logger from "redux-logger";
import api from "../middleware/api";

const configureStore = initialState => {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(logger, api)
  );
  return store;
};

export default configureStore;
