import * as currency from '../actions/currency';
import { Currency } from '../models/currency';
import { createReducer, on, Action } from '@ngrx/store';

const currenciesInitialState = [];
const baseCurrencyInitialState = 'INR';
const showAllCurrenciesInitialState = true;
const targetCurrencyInitialState = 'USD';

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
        currency.BaseCurrencyUpdateAction,
        (state, { baseCurrency }) => baseCurrency
    )
);
export function baseCurrencyreducer(state: string, action: Action): string {
    return baseCurrencyReducer(state, action);
}

const ShowAllCurrencyReducer = createReducer(
    showAllCurrenciesInitialState,
    on(
        currency.ShowAllCurrenciesUpdateAction,
        (state, { showAllCurrencies }) => showAllCurrencies
    )
);
export function showAllCurrenciesReducer(
    state: boolean,
    action: Action
): boolean {
    return ShowAllCurrencyReducer(state, action);
}

const TargetCurrencyReducer = createReducer(
    targetCurrencyInitialState,
    on(
        currency.TargetCurrencyUpdateAction,
        (state, { targetCurrency }) => targetCurrency
    )
);
export function targetCurrencyreducer(state: string, action: Action): string {
    return TargetCurrencyReducer(state, action);
}
