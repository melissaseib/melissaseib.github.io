import { call, put, all } from "redux-saga/effects";
import { SET_USER } from "../constants/ActionTypes";

export default function* rootSaga() {
  yield all([call(setUser)]);
}

export function* setUser() {
  yield put({
    type: SET_USER,
    data: {
      email: "foo",
      name: "Maxwell"
    }
  });
}
