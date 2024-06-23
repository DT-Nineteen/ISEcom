import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {Currency} from 'redux/api/app/type/currencyType';
import {
  AppConfigurationState,
  AppLanguageType,
  initialCurrencyState,
} from './constants';
import {StoreConfig} from 'redux/api/app/type/storeConfigType';

let initialState: AppConfigurationState = {
  isDarkMode: false,
  appLanguage: AppLanguageType.ENGLISH,
  currency: initialCurrencyState,
  storeConfig: [],
  isAppInit: true,
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
    setCurrency(state, action: PayloadAction<Currency>) {
      state.currency = action.payload;
    },
    setStoreConfig(state, action: PayloadAction<StoreConfig[]>) {
      state.storeConfig = action.payload;
    },
    setIsAppInit(state, action: PayloadAction<boolean>) {
      state.isAppInit = action.payload;
    },
  },
});

export const appConfigActions = {
  ...appConfigSlice.actions,
};

export const {reducer: appConfigReducer} = appConfigSlice;
