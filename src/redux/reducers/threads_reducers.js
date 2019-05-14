import {
    FETCH_THREADS_BEGIN,
    FETCH_THREADS_SUCCESS,
    FETCH_THREADS_FAILURE,
    SET_CURRENT_THREAD,
    ADD_THREADS_BEGIN,
    ADD_THREADS_SUCCESS,
    ADD_THREADS_FAILURE,
    RESET_ADDED_THREAD_FLAG
} from '../actions/threads_actions';


const initialState = {
    loading: false,
    currentThread: null,
    threads: [],
    threadAddedFlag: false,
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
        case ADD_THREADS_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };
        case ADD_THREADS_SUCCESS:
            return {
                ...state,
                loading: false,
                threadAddedFlag: true,
                error: null
            };
        case ADD_THREADS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
        case RESET_ADDED_THREAD_FLAG:
            return {
                ...state,
                loading:false,
                threadAddedFlag: false,
                error: null
            };
        default:
            return state;
    }
};