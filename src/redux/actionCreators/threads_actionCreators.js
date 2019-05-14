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


//  Threads action creators
export const addThread = (title, content, user_id, section_id) => {

    return(dispatch, getState) => {
        dispatch({type: ADD_THREADS_BEGIN});
        fetch("/api/threads", {
            method: "post",
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({
                title: title,
                content: content,
                user_id: user_id,
                section_id: section_id
            })
        })
            .then(res => {
                return res.json();
            })
            .then(data => {
                dispatch({
                    type: ADD_THREADS_SUCCESS
                });
            })
            .catch(error => {
                dispatch({
                    type: ADD_THREADS_FAILURE,
                    payload: {
                        error: error
                    }
                });
            })
    }
};

export const getThreads = (sectionID) => {
    return(dispatch, getState) => {
        console.log("Threads fetched sectionID", sectionID);
        dispatch({type: FETCH_THREADS_BEGIN});
        fetch(`/api/sections/id/${sectionID}`)
            .then(res => {
                return res.json()
            })
            .then(data => {
                console.log("Threads fetched", data);
                dispatch({
                    type: FETCH_THREADS_SUCCESS,
                    payload:{
                        threads: data.Threads
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

export const resetThreadAddedFlag = () => {
    return(dispatch, getState) => {
        dispatch({
            type: RESET_ADDED_THREAD_FLAG
        })
    }
};