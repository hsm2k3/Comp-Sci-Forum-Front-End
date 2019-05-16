import {
    FETCH_USER_BEGIN,
    FETCH_USER_SUCCESS,
    FETCH_USER_FAILURE
} from "../actions/users_actions";


const initialState = {
    user: null,
    loggedInUserID: 1
};

export const users = (state = initialState, action) => {
    switch(action.type){
        case FETCH_USER_BEGIN:
            return {
                ...state,
                loading:true,
                error: null
            };
        case FETCH_USER_SUCCESS:
            return{
                ...state,
                user: action.payload.user,
                loading:false,
                error: null
            };
        case FETCH_USER_FAILURE:
            return{
                ...state,
                loading: false,
                error: action.payload.error
            };
        default:
            return state;
    }
};