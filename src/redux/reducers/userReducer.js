import { GET_USER } from '../actions/types';

const initalState = {
}

export default function(state = initalState, action) {
    switch(action.type) {
        case GET_USER:
            return {
                ...state,
                ...Object.assign(initalState, action.payload),
            } 
        default: 
            return state;
    }
}

