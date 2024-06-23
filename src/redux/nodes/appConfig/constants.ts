import {Currency} from 'redux/api/app/type/currencyType';
import {StoreConfig} from 'redux/api/app/type/storeConfigType';

export const initialCurrencyState: Currency = {
  base_currency_code: 'USD',
  base_currency_symbol: '$',
  default_display_currency_code: 'USD',
  default_display_currency_symbol: '$',
  available_currency_codes: ['SEK', 'USD', 'VND'],
  exchange_rates: [],
};

export enum AppLanguageType {
  ARABIC = 'ar',
  ENGLISH = 'en',
}

export type AppConfigurationState = {
  isDarkMode: boolean;
  appLanguage: AppLanguageType;
  currency: Currency;
  storeConfig: StoreConfig[];
  isAppInit: boolean;
};
