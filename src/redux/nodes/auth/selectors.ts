// selectors.ts

import {RootState} from 'redux/root/store';

export const getIsAuthenticated = (state: RootState) =>
  state.auth.isAuthenticated;

export const getLoggedInUser = (state: RootState) => state.auth.user;

export const getBlockedUsers = (state: RootState) => state.auth.blockedUsers;

export const getMutedUsers = (state: RootState) => state.auth.mutedUsers;

export const getAccessToken = (state: RootState) => state.auth.accessToken;
