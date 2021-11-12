import { combineReducers } from 'redux';
import announcementReducer from '../reducers/announcementReducer';

export const rootReducer = combineReducers({
    announcement: announcementReducer,
});