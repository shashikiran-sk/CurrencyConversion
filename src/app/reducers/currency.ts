import * as currency from '../actions/currency';
import { Currency } from '../models/currency';
import { createReducer, on, Action, ActionReducer } from '@ngrx/store';
import { act } from '@ngrx/effects';
import { State } from '.';

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
    on(currency.BaseCurrenyUpdatedAction, (state, { baseCurrency }) => {
        if (['USD', 'INR', 'EUR'].includes(baseCurrency)) {
            return baseCurrency;
        }
        return state;
    })
);

export function baseCurencyreducer(state: string, action: Action): string {
    return baseCurrencyReducer(state, action);
}
