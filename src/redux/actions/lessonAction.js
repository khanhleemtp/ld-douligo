import ApiService from '../../services/api.service'
import { TokenService } from '../../services/storage.service';
import { returnErrors } from './errorActions';
import { GET_LESSON, UPDATE_LESSON } from './types'

export const getLesson = (topic, currentLevel) => async dispatch => {
    ApiService.setHeader();
    const { data } = await ApiService.post(`/get`, { level: currentLevel, topic: topic });
    dispatch({
        type: GET_LESSON,
        payload: data
    }) 
}

export const updateLesson = (topic, currentLevel, score) => async dispatch => {
    ApiService.setHeader();
    const username = TokenService.getToken('ldname');
    try {
        const { data } = await ApiService.post(`/getlearn`, { level: currentLevel, title: topic, username, score });
        dispatch({
            type: UPDATE_LESSON,
            payload: data
        })         
    } catch (error) {
        dispatch(returnErrors(error.response.data, error.response.status, 'UPDATE_LESSON_FAIL'));
    }


}