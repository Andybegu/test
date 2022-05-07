import { takeLatest, put,} from "redux-saga/effects";
import * as types from "./constant";
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
export function* getUser() {
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

export function* deleteUser({ payload: id }) {
  try {
    yield firebaseDb.child(`contacts/${id}`).remove();
    yield put(deleteUserSuccess());
  } catch (error) {
    yield put(deleteUserFail());
  }
}

export function* addUser({ payload: user }) {
  try {
    yield firebaseDb.child("contacts").push(user);
    yield put(addUserSuccess());
  } catch (error) {
    yield put(addUserFail());
  }
}

export function* editUser({
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
  yield takeLatest(types.GET_USER_START, getUser);
  yield takeLatest(types.DELETE_USER_START, deleteUser);
  yield takeLatest(types.ADD_USER_START, addUser);
  yield takeLatest(types.EDIT_USER_START, editUser);
}
