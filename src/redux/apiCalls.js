import { loginFailure, loginStart, loginSuccess } from "./userRedux"
import axiosClient from '../axios'

export const login = async (dispatch, user) => { 
    dispatch(loginStart())

    try {
        const res = await axiosClient.post('/auth/login', user)
        dispatch(loginSuccess(res.data))
    } catch (error) {
        console.log(error)

        dispatch(loginFailure())
    }
}