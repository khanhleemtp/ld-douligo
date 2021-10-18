import ApiService from '../../services/api.service'
import { TokenService } from '../../services/storage.service';
import { clearErrors, returnErrors } from './errorActions';
import { GET_USER } from './types'

export const getUser = (username=TokenService.getToken('ldname')) => async dispatch => {
    ApiService.setHeader();
    try {
        const { data } = await ApiService.post('/getuser', { username });
        console.log(data);
        dispatch({
            type: GET_USER,
            payload: data
        })         
        dispatch(clearErrors())
    } catch (error) {
        dispatch(returnErrors(error?.response?.data, error?.response?.status, 'GET_USER_FAIL'));
    }

}