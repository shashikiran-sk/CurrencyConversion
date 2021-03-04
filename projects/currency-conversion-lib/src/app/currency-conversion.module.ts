import { InjectionToken, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurrencyConversionComponent } from './currency-conversion.component';
import { CurrencyInputComponent } from './components/currency-input/currency-input.component';
import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { reducers, currencyConversionStateKey } from './reducers/index';
import { EffectsModule } from '@ngrx/effects';
import { CurrencyEffects } from './effects/currencyEffects';
import { FormsModule } from '@angular/forms';
import { CurrencyService } from './services/currency.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const REDUCERS_TOKEN = new InjectionToken<ActionReducerMap<typeof reducers>>('CurrencyConversion Reducers');

@NgModule({
    declarations: [CurrencyConversionComponent, CurrencyInputComponent],
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        StoreModule.forFeature(currencyConversionStateKey, REDUCERS_TOKEN),
        EffectsModule.forFeature([CurrencyEffects])
    ],
    providers: [CurrencyService, { provide: REDUCERS_TOKEN, useValue: reducers }],
    exports: [CurrencyConversionComponent]
})
export class CurrencyConversionModule {}
