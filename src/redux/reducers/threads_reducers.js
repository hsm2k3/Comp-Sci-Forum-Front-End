import {
    FETCH_THREADS_BEGIN,
    FETCH_THREADS_SUCCESS,
    FETCH_THREADS_FAILURE
} from '../actions/threads_actions';


const initialState = {
    threads: [],
    error: null
};

export const threads = (state = initialState, action) => {
    switch(action.type){
        case FETCH_THREADS_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };
        case FETCH_THREADS_SUCCESS:
            return {
                ...state,
                loading: false,
                threads: action.payload.threads
            };
        case FETCH_THREADS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                threads: []
            };
        default:
            return state;
    }
};