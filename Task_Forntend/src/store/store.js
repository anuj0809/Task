/* eslint-disable prettier/prettier */
import {configureStore, combineReducers} from '@reduxjs/toolkit';
import logger from 'redux-logger';

import contactSlice from './Slices/contactSlice';

const rootReducer = combineReducers({
  contact: contactSlice,
});

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});

export {store};
