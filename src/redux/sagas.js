import { takeLatest, put} from "redux-saga/effects";
import * as types from "./actionType";
import firebaseDb from "../firebase";
import {
  getUserSuccess,
  getUserFail,
  deleteUserSuccess,
  deleteUserFail,
  addUserSuccess,
  addUserFail,
  editUserSuccess,
  editUserFail,
} from "./action";

export function* onLoadUserAsync() {
  try {
    const users = yield new Promise((resolve) =>
      firebaseDb.child("contacts").on("value", resolve)
    );
    if (users.val() !== null) {
      yield put(getUserSuccess(users.val()));
    } else {
      yield put(getUserSuccess({}));
    }
  } catch (error) {
    yield put(getUserFail());
  }
}

export function* onDeleteUserAsync({ payload: id }) {
  try {
    yield firebaseDb.child(`contacts/${id}`).remove();
    yield put(deleteUserSuccess());
  } catch (error) {
    yield put(deleteUserFail());
  }
}

export function* onAddUserAsync({ payload: user }) {
  try {
    yield firebaseDb.child("contacts").push(user);
    yield put(addUserSuccess());
  } catch (error) {
    yield put(addUserFail());
  }
}

export function* onEditUserAsync({
  payload: { id, initialState: user },
}) {
  try {
    yield firebaseDb.child(`contacts/${id}`).set(user);
    yield put(editUserSuccess());
  } catch (error) {
    yield put(editUserFail());
  }
}
export default function* rootSaga() {
  yield takeLatest(types.DELETE_USER_START, onDeleteUserAsync);
  yield takeLatest(types.ADD_USER_START, onAddUserAsync);
  yield takeLatest(types.EDIT_USER_START, onEditUserAsync);
  yield takeLatest(types.GET_USER_START, onLoadUserAsync);
}
