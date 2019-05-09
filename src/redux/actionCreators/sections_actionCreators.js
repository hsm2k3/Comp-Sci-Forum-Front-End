import {
    FETCH_SECTIONS_BEGIN,
    FETCH_SECTIONS_SUCCESS,
    FETCH_SECTIONS_FAILURE,
    SET_CURRENT_SECTION
} from '../actions/sections_actions';


//  Sections action creators
export const getSections = () => {
    return(dispatch, getState) => {
        dispatch({type: FETCH_SECTIONS_BEGIN});
        fetch('/api/sections')
            .then(res => {
                return res.json()
            })
            .then(data => {
                dispatch({
                    type: FETCH_SECTIONS_SUCCESS,
                    payload:{
                        sections: data
                    }
                })
            })
            .catch(error => {
                dispatch({
                    type: FETCH_SECTIONS_FAILURE,
                    payload:{
                        error: error
                    }
                })
            })
    }
};

export const setCurrentSection = (section) => {
//If section returned code
    return(dispatch, getState) => {
        if(section.startsWith("CSC")){
            fetch(`/api/sections/code/${section}`)
                .then( res => {
                    return res.json();
                })
                .then(data => {
                    dispatch({
                        type: SET_CURRENT_SECTION,
                        payload:{
                            currentSection: data
                        }
                    })
                })
                .catch(() => console.error('SectionPage: unable to fetch data'))
        }
        //  if section doesn't have code, search by title
        else{
            fetch(`/api/sections/title/${section}`)
                .then( res => {
                    return res.json();
                })
                .then(data => {
                    dispatch({
                        type: SET_CURRENT_SECTION,
                        payload:{
                            currentSection: data
                        }
                    })
                })
                .catch(() => console.error('SectionPage: unable to fetch data'))
        }


    }
};