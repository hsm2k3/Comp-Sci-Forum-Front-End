import {
    FETCH_POSTS_BEGIN,
    FETCH_POSTS_SUCCESS,
    FETCH_POSTS_FAILURE
} from '../actions/posts_actions';


//  Posts action creators
export const getPosts = () => {
    return(dispatch, getState) => {
        dispatch({type: FETCH_POSTS_BEGIN});
        fetch('/api/posts')
            .then(res => {
                return res.json()
            })
            .then(data => {
                dispatch({type: FETCH_POSTS_SUCCESS, payload:{sections: data}})
            })
            .catch(error => dispatch({type: FETCH_POSTS_FAILURE, payload:{error: error}}))
    }
};