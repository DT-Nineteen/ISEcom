import {configureStore} from '@reduxjs/toolkit';
import {rootReducer} from './reducer';
import {rootApi} from './api';
import middlewares from './middlewares';
import {initialRootState} from './constants';
import {setupListeners} from '@reduxjs/toolkit/query';

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(rootApi.middleware).concat(middlewares),
  preloadedState: initialRootState,
});

setupListeners(store.dispatch);
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
