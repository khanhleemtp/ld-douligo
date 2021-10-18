import { GET_ERRORS, CLEAR_ERRORS } from '../actions/types';

const initalState = {
    msg: "",
    id: null,
    status: null,
}

export default function(state = initalState, action) {
    switch(action.type) {
        case GET_ERRORS:
            return {
                ...state,
                msg: action.payload.msg,
                id: action.payload.id,
                status: action.payload.status,
            }
        case CLEAR_ERRORS:
            return {
                msg: "",
                id: null,
                status: null,
            }
        default: 
            return state;
    }
}