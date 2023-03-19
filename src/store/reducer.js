import {combineReducers} from 'redux';
import {movieBookingReducer} from './../MovieBooking/duck/reducer';

const rootReducer = combineReducers({
    movieBookingReducer,
});

export {rootReducer};