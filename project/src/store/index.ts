import { configureStore } from '@reduxjs/toolkit';
import api from '../services/api';
import { reducer } from './reducer';
import { redirect } from './middlewares/redirect';

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware ({
    thunk: {
      extraArgument: api,
    },
  }).concat(redirect)
});
