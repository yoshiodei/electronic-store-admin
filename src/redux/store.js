import { configureStore, combineReducers } from '@reduxjs/toolkit';
import reportReducer from './slice/ReportSlice';

const rootReducer = combineReducers({
  report: reportReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
