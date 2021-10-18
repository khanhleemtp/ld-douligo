import { GET_LEARN, UPDATE_LESSON } from '../actions/types';

const initalState = {
}

export default function(state = initalState, action) {
    switch(action.type) {
        case GET_LEARN:
        case UPDATE_LESSON:
            return {
                ...state,
                ...Object.assign(initalState, action.payload)
            }
        default: 
            return state;
    }
}