import { Currency } from '../models/currency';
import * as fromAmount from './amount';
import * as fromCurrency from './currency';
import * as fromCountry from './country';

export interface State {
    countries: Array<string>;
    baseCurrency: string;
    amount: number;
    currencies: Array<Currency>;
}

export const reducers = {
    countries: fromCountry.CountryReducer,
    baseCurrency: fromCurrency.baseCurencyreducer,
    amount: fromAmount.reducer,
    currencies: fromCurrency.reducer,
};

export const getAmountState = (state: State) => state.amount;

export const getCurrencyState = (state: State) => state.currencies;

export const getBaseCurrencyState = (state: State) => state.baseCurrency;

export const getCountriesState = (state: State) => state.countries;
