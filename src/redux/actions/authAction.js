import ApiService from '../../services/api.service';
import { TokenService } from '../../services/storage.service';
import {
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS,
    REGISTER_FAIL,
    REGISTER_SUCCESS, 
} from '../actions/types';

import { returnErrors, clearErrors } from './errorActions';

export const register = ({ username, password, name }) => async (dispatch) => {
    try {
        const { data } = await ApiService.post('/register', { username: username, password: password, name: name });        
        console.log('data' , data);
        dispatch({ type: REGISTER_SUCCESS, payload: data });
        dispatch(clearErrors());
    } catch (error) {
        dispatch(returnErrors(error?.response?.data, error?.response?.status, REGISTER_FAIL));
    }
}

export const signIn = ({ username, password }) => async (dispatch) => {
    try {
        const { data } = await ApiService.post('/login', { username, password });
        TokenService.saveToken(data);
        TokenService.saveToken(username,"ldname")
        dispatch({ type: LOGIN_SUCCESS, payload: username });
        dispatch(clearErrors());
    } catch (error) {
        dispatch(returnErrors(error?.response?.data, error?.response?.status, LOGIN_FAIL));
    }


}



export const logout = () => {
    TokenService.removeToken();
    TokenService.removeToken('ldname');
    ApiService.removeHeader();
    ApiService.unmount401Interceptor();
    return {
        type: LOGOUT_SUCCESS
    }
}