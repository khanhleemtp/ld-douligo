import { TokenService } from '../../services/storage.service';
import { 
    LOGIN_FAIL, 
    LOGIN_SUCCESS, 
    LOGOUT_SUCCESS,
    REGISTER_FAIL,
    REGISTER_SUCCESS,
} from '../actions/types';

const initialState = {
    user: null,
    token: null,
    isAuthenticated: null,
}

export default function(state = initialState, action) {
switch(action.type) {
    case LOGIN_FAIL:
    case REGISTER_FAIL:
        TokenService.removeToken();
        return {
            user: null,
            token: null,
        }
    case LOGOUT_SUCCESS: {
        return {
            user: null,
            token: null,
        }        
        }
    case LOGIN_SUCCESS: {
        return {
            ...state,
            username: action.payload,
            isAuthenticated: true,
        }
        }
    case REGISTER_SUCCESS: 
        return {
            ...state,
            user: action.payload._id,
        }
      
    default: 
        return state;
}
}