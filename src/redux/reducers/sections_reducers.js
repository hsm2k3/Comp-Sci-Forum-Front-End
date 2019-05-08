import {
    FETCH_SECTIONS_BEGIN,
    FETCH_SECTIONS_SUCCESS,
    FETCH_SECTIONS_FAILURE,
    SET_CURRENT_SECTION
} from '../actions/sections_actions';


const initialState = {
    currentSection: null,
    sections: [],
    error: null
};

export const sections = (state = initialState, action) => {
    switch(action.type){
        case FETCH_SECTIONS_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };
        case FETCH_SECTIONS_SUCCESS:
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
        case SET_CURRENT_SECTION:
            return {
                ...state,
                loading: false,
                currentSection: action.payload.currentSection
            };
        default:
            return state;
    }
};