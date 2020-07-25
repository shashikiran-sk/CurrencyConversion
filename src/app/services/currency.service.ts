import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Currency } from './../models/currency';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class CurrencyService {
    constructor(private http: HttpClient) {}

    getRates(): Observable<Currency[]> {
        return this.http
            .get<any>('https://api.exchangeratesapi.io/latest?base=USD')
            .pipe(
                map((result) => {
                    return Object.keys(result.rates).map((key, index) => {
                        return { code: key, value: result.rates[key] };
                    });
                })
            );
    }
}
