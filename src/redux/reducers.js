import { combineReducers } from 'redux';
import {
    FETCH_SECTIONS_BEGIN,
    FETCH_SECTIONS_SUCCESS,
    FETCH_SECTIONS_FAILURE
} from './actions';


const initialState = {
    currentSection: null,
    sections: [],
    error: null
};

const sections = (state = initialState, action) => {
    switch(action.type){
        case FETCH_SECTIONS_BEGIN:
            console.log("Fetch began");
            return {
                ...state,
                loading: true,
                error: null
            };
        case FETCH_SECTIONS_SUCCESS:
            console.log("Fetch success", {action});
            // return Object.assign({}, state, {
            //     loading: false,
            //     sections: action.payload.sections
            // });
            return {
                ...state,
                loading: false,
                sections: action.payload.sections
            };
        case FETCH_SECTIONS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                sections: []
            };
        default:
            return state;
    }
};

const appReducer = combineReducers({
    sections
});


export default appReducer;