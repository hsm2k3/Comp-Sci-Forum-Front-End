import {
    FETCH_USER_BEGIN,
    FETCH_USER_SUCCESS,
    FETCH_USER_FAILURE
} from "../actions/users_actions";


//  users action creators
export const getUser = user_id => {
    console.log("getUser_start: ", user_id);
    return (dispatch, getState) => {
        dispatch({type: FETCH_USER_BEGIN});
        fetch(`/api/users/id/${user_id}`)
            .then(res => {
                    return res.json()
            })
            .then(data => {
                console.log("getUser_end: ", data);
                dispatch({
                    type: FETCH_USER_SUCCESS,
                    payload:{
                        user: data
                    }
                })
            })
            .catch(error => dispatch({
                type: FETCH_USER_FAILURE,
                payload:{
                    error: error
                }
            }))
    }
};