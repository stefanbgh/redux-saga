import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./rootReducer";

import rootSaga from "./rootSaga";

const reducer = rootReducer();

export const sagaMiddleware = createSagaMiddleware();
export const middlewares = [sagaMiddleware];

const store = configureStore({ reducer, middleware: middlewares });

sagaMiddleware.run(rootSaga);

export default store;
