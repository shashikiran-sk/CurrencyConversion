import { Currency } from '../models/currency';
import * as fromAmount from './amount';
import * as fromCurrency from './currency';
import * as fromCountry from './country';
import { createFeatureSelector, createSelector } from '@ngrx/store';
export const currencyConversionStateKey = 'CurrencyConversion';

export interface FeatureState {
    countries: Array<string>;
    baseCurrency: string;
    amount: number;
    currencies: Array<Currency>;
}

export interface AppState {
    [currencyConversionStateKey]: FeatureState;
}

export const reducers = {
    countries: fromCountry.CountryReducer,
    baseCurrency: fromCurrency.baseCurencyreducer,
    amount: fromAmount.reducer,
    currencies: fromCurrency.reducer,
};
export const selectFeature = createFeatureSelector<AppState, FeatureState>(
    currencyConversionStateKey
);

export const getAmountState = createSelector(selectFeature, (state: FeatureState) => state.amount);

export const getCurrencyState = createSelector(selectFeature, (state: FeatureState) => state.currencies);

export const getBaseCurrencyState = createSelector(selectFeature, (state: FeatureState) => state.baseCurrency);

export const getCountriesState = createSelector(selectFeature, (state: FeatureState) => state.countries);
