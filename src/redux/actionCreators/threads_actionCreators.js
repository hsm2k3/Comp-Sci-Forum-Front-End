import {
    FETCH_THREADS_BEGIN,
    FETCH_THREADS_SUCCESS,
    FETCH_THREADS_FAILURE
} from '../actions/threads_actions';


//  Threads action creators
export const getThreads = (sectionID) => {
    return(dispatch, getState) => {
        dispatch({type: FETCH_THREADS_BEGIN});
        fetch(`/api/threads/${sectionID}`)
            .then(res => {
                return res.json()
            })
            .then(data => {
                dispatch({
                    type: FETCH_THREADS_SUCCESS,
                    payload:{
                        threads: data
                    }
                })
            })
            .catch(error => dispatch({
                type: FETCH_THREADS_FAILURE,
                payload:{
                    error: error
                }
            }))
    }
};