import {legacy_createStore as createStore, applyMiddleware ,combineReducers} from "redux";
import createSagaMiddleware from "redux-saga";
import userReducer from "./reducer";
import rootSaga from "./sagas";

const rootReducer=combineReducers({
  data:userReducer
})
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
const store = createStore(rootReducer, applyMiddleware(...middleware));
sagaMiddleware.run(rootSaga);
export default store;
