import { createAction, props } from '@ngrx/store';
import { Currency } from '../models/currency';

export const CURRENCIESUPDATE = '[Currency] UpdateAll';
export const CURRENCIESUPDATED = '[Currency] UpdatedAll';
export const BASECURRENCYUPDATE = '[Currency] BaseCurrencyChange';
export const TARGETCURRENCYUPDATE = '[Currency] TargetCurrencyChange';
export const SHOWALLCURRENCIESUPDATE = '[Result Currency] ShowAllCurrencies';

export const CurrenciesUpdateAction = createAction(CURRENCIESUPDATE);

export const CurrenciesUpdatedAction = createAction(
    CURRENCIESUPDATED,
    props<{ payload: Array<Currency> }>()
);

export const BaseCurrencyUpdateAction = createAction(
    BASECURRENCYUPDATE,
    props<{ baseCurrency: string }>()
);

export const ShowAllCurrenciesUpdateAction = createAction(
    SHOWALLCURRENCIESUPDATE,
    props<{ showAllCurrencies: boolean }>()
);

export const TargetCurrencyUpdateAction = createAction(
    TARGETCURRENCYUPDATE,
    props<{ targetCurrency: string }>()
);
