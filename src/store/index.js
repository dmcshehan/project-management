import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import firebase from "../config/firebase";
import { reactReduxFirebase, getFirebase } from "react-redux-firebase";
import { reduxFirestore, getFirestore } from "redux-firestore";

// all reducers
import authReducer from "./reducers/auth";
import projectReducer from "./reducers/project";

const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reactReduxFirebase(firebase),
    reduxFirestore(firebase)
  )
);
