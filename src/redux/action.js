import * as types from "./constant";

export const getUserStart = () => ({
  type: types.GET_USER_START,
});
export const getUserSuccess = (users) => ({
  type: types.GET_USER_SUCCESS,
  payload: users,
});
export const getUserFail = (error) => ({
  type: types.GET_USER_SUCCESS,
  payload: error,
});
export const deleteUserStart = (id) => ({
  type: types.DELETE_USER_START,
  payload: id,
});

export const deleteUserSuccess = () => ({
  type: types.DELETE_USER_SUCCESS,
});
export const addUserStart = (user) => ({
  type: types.ADD_USER_START,
  payload: user,
});

export const addUserSuccess = () => ({
  type: types.ADD_USER_SUCCESS,
});
export const editUserStart = (userDetail) => ({
  type: types.EDIT_USER_START,
  payload: userDetail,
});

export const editUserSuccess = () => ({
  type: types.EDIT_USER_SUCCESS,
});


