import {
  loginFailure,
  loginStart,
  loginSuccess,
  registerFailure,
  registerStart,
  registerSuccess,
} from "./userRedux";

import axiosClient from "../axios";

export const login = async (dispatch, user) => {

  dispatch(loginStart());

  try {
    const res = await axiosClient.post("/auth/login", user);
    if(!res.data.isAdmin){
      alert('You are not admin')
    }else{
      dispatch(loginSuccess(res.data));
    }
  } catch (error) {
    console.log(error);
    dispatch(loginFailure());
  }
};

export const register = async (dispatch, user) => {
  dispatch(registerStart());

  try {
    const res = await axiosClient.post("/auth/register", user);
    dispatch(registerSuccess(res.data));
  } catch (error) {
    console.log(error);
    dispatch(registerFailure());
  }
};
