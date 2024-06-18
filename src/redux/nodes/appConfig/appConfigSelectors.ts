import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {RootState} from 'redux/root/store';

export enum AppLanguageType {
  ARABIC = 'ar',
  ENGLISH = 'en',
}

export type AppConfigurationState = {
  isDarkMode: boolean;
  appLanguage: AppLanguageType;
};

let initialState: AppConfigurationState = {
  isDarkMode: false,
  appLanguage: AppLanguageType.ENGLISH,
};

//Create reducer
const appConfigSlice = createSlice({
  name: 'appConfig',
  initialState,
  reducers: {
    toggleDarkMode: state => {
      state.isDarkMode = !state.isDarkMode;
    },
    changeLanguage: (state, action: PayloadAction<AppLanguageType>) => {
      state.appLanguage = action.payload;
    },
  },
});

export const appConfigActions = {
  ...appConfigSlice.actions,
};
// create selectors
export const isDarkMode = (state: RootState) => state.appConfig.isDarkMode;
export const selectAppLanguage = (state: RootState) =>
  state.appConfig.appLanguage;

export default appConfigSlice.reducer;
