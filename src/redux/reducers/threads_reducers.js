import {
    FETCH_THREADS_BEGIN,
    FETCH_THREADS_SUCCESS,
    FETCH_THREADS_FAILURE,
    SET_CURRENT_THREAD
} from '../actions/threads_actions';


const initialState = {
    currentThread: null,
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
        case SET_CURRENT_THREAD:
            return{
                ...state,
                loading: false,
                currentThread: action.payload.currentThread
            };
        default:
            return state;
    }
};