import {
    FETCH_THREADS_BEGIN,
    FETCH_THREADS_SUCCESS,
    FETCH_THREADS_FAILURE,
    SET_CURRENT_THREAD
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

export const setCurrentThread = (threadId) => {
    return(dispatch, getState) => {
        fetch(`/api/threads/id/${threadId}`)
            .then( res => {
                if(!res.ok)
                    throw Error(res.statusText);
                return res.json();
            })
            .then(data => {
                console.log("threadsFetched", data);
                dispatch({
                    type: SET_CURRENT_THREAD,
                    payload:{
                        currentThread: data
                    }
                })
            })
            .catch(() => {
                console.error('ThreadsPage: unable to fetch data');
            });
    }
};