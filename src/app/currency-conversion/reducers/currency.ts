import * as currency from '../actions/currency';
import { Currency } from '../models/currency';
import { createReducer, on, Action } from '@ngrx/store';

const currenciesInitialState = [];
const baseCurrencyInitialState = 'INR';

const currencyReducer = createReducer(
    currenciesInitialState,
    on(currency.CurrenciesUpdatedAction, (state, { payload }) => payload)
);

export function reducer(state: any[], action: Action): Array<Currency> {
    return currencyReducer(state, action);
}

const baseCurrencyReducer = createReducer(
    baseCurrencyInitialState,
    on(
        currency.BaseCurrenyUpdatedAction,
        (state, { baseCurrency }) => baseCurrency
    )
);

export function baseCurencyreducer(state: string, action: Action): string {
    return baseCurrencyReducer(state, action);
}
