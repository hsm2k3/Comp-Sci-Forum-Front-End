import { combineReducers } from 'redux';
import { sections } from './sections_reducers';
import { threads } from './threads_reducers';
import { users } from './users_reducers';

const rootReducer = combineReducers({
    sections,
    threads,
    users
});

export default rootReducer;