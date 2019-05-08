import { combineReducers } from 'redux';
import { sections } from './sections_reducers';
import { threads } from './threads_reducers';

const rootReducer = combineReducers({
    sections,
    threads
});

export default rootReducer;