import {RootState} from 'redux/root/store';

// create selectors
export const isDarkMode = (state: RootState) => state.appConfig.isDarkMode;
export const selectAppLanguage = (state: RootState) =>
  state.appConfig.appLanguage;
export const selectCurrency = (state: RootState) => state.appConfig.currency;
export const selectStoreConfig = (state: RootState) =>
  state.appConfig.storeConfig;
export const getIsAppInit = (state: RootState) => state.appConfig.isAppInit;
