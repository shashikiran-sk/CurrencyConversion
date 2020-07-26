import { CurrenciesUpdatedAction } from './../actions/currency';
import { CurrencyService } from './../services/currency.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

import * as currency from '../actions/currency';

import { Actions, Effect, ofType, createEffect } from '@ngrx/effects';
import { switchMap, map } from 'rxjs/operators';

@Injectable()
export class CurrencyEffects {
    update$: Observable<Action> = createEffect(() =>
        this.actions$.pipe(
            ofType(currency.CurrenciesUpdateAction),
            switchMap(() =>
                this.currencyService
                    .getRates()
                    .pipe(
                        map((payload) => CurrenciesUpdatedAction({ payload }))
                    )
            )
        )
    );

    constructor(
        private currencyService: CurrencyService,
        private actions$: Actions
    ) {}
}
