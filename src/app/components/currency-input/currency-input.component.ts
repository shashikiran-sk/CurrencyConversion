import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AmountChangeAction } from 'src/app/actions/amount';
import { BaseCurrenyUpdatedAction } from 'src/app/actions/currency';
import * as fromRoot from '../../reducers';

@Component({
    selector: 'app-currency-input',
    templateUrl: './currency-input.component.html',
    styleUrls: ['./currency-input.component.scss'],
})
export class CurrencyInputComponent implements OnInit {
    public amount$: Observable<number>;
    public baseCurrency: string;
    private countries: Array<string>;
    @Output() amount = new EventEmitter<number>();

    constructor(public store: Store<fromRoot.State>) {
        this.amount$ = store.select(fromRoot.getAmountState);
        store.pipe(select(fromRoot.getCountriesState)).subscribe((list) => {
            this.countries = list;
        });
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
        if (this.countries.includes(currency)) {
            this.store.dispatch(
                BaseCurrenyUpdatedAction({ baseCurrency: currency })
            );
        }
    }
}
