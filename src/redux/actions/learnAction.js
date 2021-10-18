import ApiService from '../../services/api.service'
import { TokenService } from '../../services/storage.service';
import { clearErrors, returnErrors } from './errorActions';
import { GET_LEARN } from './types'

export const getLearn = (username=TokenService.getToken('ldname')) => async dispatch => {
    ApiService.setHeader();
    try {
        const { data } = await ApiService.post('/getlearn', { username });
        console.log(data);
        dispatch({
            type: GET_LEARN,
            payload: data
        })         
        dispatch(clearErrors())
    } catch (error) {
        dispatch(returnErrors(error?.response?.data, error?.response?.status, 'GET_LEARN_FAIL'));
    }

}

