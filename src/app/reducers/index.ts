import { Currency } from '../models/currency';
import * as fromAmount from './amount';
import * as fromCurrency from './currency';

export interface State {
    amount: number;
    currencies: Array<Currency>;
}

export const reducers = {
    amount: fromAmount.reducer,
    currencies: fromCurrency.reducer,
};

export const getAmountState = (state: State) => state.amount;

export const getCurrencyState = (state: State) => state.currencies;
