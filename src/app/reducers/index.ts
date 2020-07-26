import { Currency } from '../models/currency';
import * as fromAmount from './amount';
import * as fromCurrency from './currency';

export interface State {
    baseCurrency: string;
    amount: number;
    currencies: Array<Currency>;
}

export const reducers = {
    baseCurrency: fromCurrency.baseCurencyreducer,
    amount: fromAmount.reducer,
    currencies: fromCurrency.reducer,
};

export const getAmountState = (state: State) => state.amount;

export const getCurrencyState = (state: State) => state.currencies;

export const getBaseCurrencyState = (state: State) => state.baseCurrency;
