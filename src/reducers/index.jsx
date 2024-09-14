import { combineReducers } from 'redux';
import { employeeReducer } from './employee.reducer';

const reducers = {
    employeeReducer,
}  
export const rootReducers = combineReducers(reducers);