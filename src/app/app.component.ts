import {
    Component,
    ChangeDetectionStrategy,
    OnInit,
    OnChanges,
} from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from './reducers';
import { CurrenciesUpdateAction } from './actions/currency';
import { Observable } from 'rxjs';
import { Currency } from './models/currency';
import { CountriesUpdateAction } from './actions/country';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit, OnChanges {
    title = 'Convert Currency from Base value to all other Currency values!';
    public currencyRates$: Observable<Currency[]>;
    public amount = 0;

    constructor(public store: Store<fromRoot.State>) {
        this.currencyRates$ = store.select(fromRoot.getCurrencyState);
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
