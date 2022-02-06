import { applyMiddleware, createStore } from "redux";
import rootReducer from "./rootReducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const composeEnhancers = composeWithDevTools({});

export default function configureStore() {
  return createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
}
