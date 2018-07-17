import { combineReducers } from "redux-immutable";
import user from "./user";
import route from "./route";

export default function createReducer(injectedReducers) {
  return combineReducers({
    user: user,
    route: route
  });
}
