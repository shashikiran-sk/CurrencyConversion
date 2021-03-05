import { Component, OnChanges, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from './reducers';
import { CurrenciesUpdateAction } from './actions/currency';
import { Observable, pipe } from 'rxjs';
import { Currency } from './models/currency';
import { CountriesUpdateAction } from './actions/country';

@Component({
  selector: 'sklib-currency-conversion',
  templateUrl: './currency-conversion.component.html',
  styleUrls: ['./currency-conversion.component.scss']
})
export class CurrencyConversionComponent implements OnInit, OnChanges {
    title = 'Convert Currency from Base value to all other Currency values!';
    public currencyRates$: Observable<Currency[]>;
    public showAllCurrencies$: Observable<boolean>;
    public targetCurrency$: Observable<string>;
    public amount = 0;

    constructor(public store: Store<fromRoot.AppState>) {
        this.currencyRates$ = store.select(fromRoot.getCurrencyState);
        this.targetCurrency$ = store.select(fromRoot.getTargetCurrencyState);
        this.showAllCurrencies$ = store.select(
            fromRoot.getShowAllCurrenciesState
        );
    }

    ngOnInit(): void {
        this.store.dispatch(CurrenciesUpdateAction());
        this.store.dispatch(CountriesUpdateAction());
    }

    ngOnChanges(changes: any): void {
        console.log(changes);
    }

    onAmountChange(amountNum: number): void {
        this.amount = amountNum;
    }
}
