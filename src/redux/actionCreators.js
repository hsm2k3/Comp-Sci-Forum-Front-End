import {
    FETCH_SECTIONS_BEGIN,
    FETCH_SECTIONS_SUCCESS,
    FETCH_SECTIONS_FAILURE
} from './actions';

import { fetchSections } from "../helpers/fetches";


//  Sections action creators
export const getSections = () => {
    return(dispatch, getState) => {
        dispatch({type: FETCH_SECTIONS_BEGIN});
        fetch('/api/sections')
            .then(res => {
                return res.json()
            })
            .then(data => {
                dispatch({type: FETCH_SECTIONS_SUCCESS, payload:{sections: data}})
            })
            .catch(error => dispatch({type: FETCH_SECTIONS_FAILURE, payload:{error: error}}))
    }
};