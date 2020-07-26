import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Currency } from './../models/currency';

import { map, switchMap, take } from 'rxjs/operators';
import { Observable } from 'rxjs';

import * as fromRoot from '../reducers';
import { select, Store } from '@ngrx/store';

@Injectable({
    providedIn: 'root',
})
export class CurrencyService {
    constructor(private http: HttpClient, private store: Store) {}

    getRates(): Observable<Currency[]> {
        return this.store.pipe(
            select(fromRoot.getBaseCurrencyState),
            // take(2), // Use to restrict observable
            switchMap((base) =>
                this.http
                    .get<any>(
                        `https://api.exchangeratesapi.io/latest?base=${base}`
                    )
                    .pipe(
                        map((result) => {
                            return Object.keys(result.rates).map(
                                (key) => {
                                    return {
                                        code: key,
                                        value: result.rates[key],
                                    };
                                }
                            );
                        })
                    )
            )
        );
    }
}
