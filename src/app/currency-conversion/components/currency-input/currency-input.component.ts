import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AmountChangeAction } from '../../actions/amount';
import { BaseCurrenyUpdatedAction } from '../../actions/currency';
import * as fromRoot from '../../reducers';

@Component({
    selector: 'skapp-currency-input',
    templateUrl: './currency-input.component.html',
    styleUrls: ['./currency-input.component.scss'],
})
export class CurrencyInputComponent implements OnInit {
    public amount$: Observable<number>;
    public baseCurrency$: Observable<string>;
    public countries$: Observable<string[]>;
    @Output() amount = new EventEmitter<number>();

    constructor(public store: Store<fromRoot.AppState>) {
        this.amount$ = store.select(fromRoot.getAmountState);
        this.baseCurrency$ = store.pipe(select(fromRoot.getBaseCurrencyState));
        this.countries$ = store.pipe(select(fromRoot.getCountriesState));
    }

    ngOnInit(): void {
        this.amount$.subscribe((amount) => {
            this.amount.emit(amount);
        });
    }

    onAmountChange(amount: string): void {
        const amountNumber = parseFloat(amount);
        if (!isNaN(amountNumber)) {
            this.store.dispatch(AmountChangeAction({ amountNumber }));
        }
    }

    onBaseCurrencyChange(currency: string): void {
        this.store.dispatch(
            BaseCurrenyUpdatedAction({ baseCurrency: currency })
        );
    }
}
