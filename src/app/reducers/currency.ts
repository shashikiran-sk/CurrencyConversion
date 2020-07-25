import * as currency from '../actions/currency';
import { Currency } from '../models/currency';

export function reducer(state = [], action: currency.CurrenciesUpdatedAction): Array<Currency> {
    switch (action.type) {
        case currency.CURRENCIESUPDATED:
            return action.payload;
        default:
            return state;
    }
}
