import { Currency } from '../models/currency';
import * as fromAmount from './amount';
import * as fromCurrency from './currency';
import * as fromCountry from './country';
import { createFeatureSelector, createSelector } from '@ngrx/store';
export const currencyConversionStateKey = 'CurrencyConversion';

export interface FeatureState {
    countries: Array<string>;
    baseCurrency: string;
    targetCurrency: string;
    amount: number;
    currencies: Array<Currency>;
    showAllCurrencies: boolean;
}

export interface AppState {
    [currencyConversionStateKey]: FeatureState;
}

export const reducers = {
    countries: fromCountry.CountryReducer,
    baseCurrency: fromCurrency.baseCurrencyreducer,
    targetCurrency: fromCurrency.targetCurrencyreducer,
    amount: fromAmount.reducer,
    currencies: fromCurrency.reducer,
    showAllCurrencies: fromCurrency.showAllCurrenciesReducer,
};
export const selectFeature = createFeatureSelector<AppState, FeatureState>(
    currencyConversionStateKey
);

export const getAmountState = createSelector(
    selectFeature,
    (state: FeatureState) => state.amount
);

export const getCurrencyState = createSelector(
    selectFeature,
    (state: FeatureState) => state.currencies
);

export const getBaseCurrencyState = createSelector(
    selectFeature,
    (state: FeatureState) => state.baseCurrency
);

export const getTargetCurrencyState = createSelector(
    selectFeature,
    (state: FeatureState) => state.targetCurrency
);

export const getCountriesState = createSelector(
    selectFeature,
    (state: FeatureState) => state.countries
);

export const getShowAllCurrenciesState = createSelector(
    selectFeature,
    (state: FeatureState) => state.showAllCurrencies
);
