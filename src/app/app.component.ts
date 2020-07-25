import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from './reducers';
import { AmountChangeAction } from './actions/amount';
import { Observable } from 'rxjs';
import { Currency } from './models/currency';
import { CurrenciesUpdateAction } from './actions/currency';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
    title = 'currency-conversion';
    public amount$: Observable<number>;
    public currencyRates$: Observable<Currency[]>;

    constructor(public store: Store<fromRoot.State>) {
        this.amount$ = store.select(fromRoot.getAmountState);
        this.currencyRates$ = store.select(fromRoot.getCurrencyState);
    }

    ngOnInit(): void {
        this.store.dispatch(new CurrenciesUpdateAction());
    }

    onAmountChange(amount: string): void {
        const amountNumber = parseFloat(amount);
        if (!isNaN(amountNumber)) {
            this.store.dispatch(new AmountChangeAction(amountNumber));
        }
    }
}
