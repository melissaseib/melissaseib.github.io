import user from "./user";
import { fork } from "redux-saga/effects";

export default function* rootSaga() {
  yield fork(user);
}
