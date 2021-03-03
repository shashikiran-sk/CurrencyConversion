import { createAction, props } from '@ngrx/store';
import { Currency } from '../models/currency';

export const CURRENCIESUPDATE = '[Currency] UpdateAll';
export const CURRENCIESUPDATED = '[Currency] UpdatedAll';
export const BASECURRENCYUPDATED = '[Currency] BaseCurrencyChange';

export const CurrenciesUpdateAction = createAction(CURRENCIESUPDATE);

export const CurrenciesUpdatedAction = createAction(
    CURRENCIESUPDATED,
    props<{ payload: Array<Currency> }>()
);

export const BaseCurrenyUpdatedAction = createAction(
    BASECURRENCYUPDATED,
    props<{ baseCurrency: string }>()
);
