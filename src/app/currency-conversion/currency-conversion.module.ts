import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurrencyConversionRoutingModule } from './currency-conversion-routing.module';
import { CurrencyConversionComponent } from './currency-conversion.component';
import { CurrencyInputComponent } from './components/currency-input/currency-input.component';
import { StoreModule } from '@ngrx/store';
import { reducers, currencyConversionStateKey } from './reducers/index';
import { EffectsModule } from '@ngrx/effects';
import { CurrencyEffects } from './effects/currencyEffects';
import { FormsModule } from '@angular/forms';
import { CurrencyService } from './services/currency.service';
import { NgbDropdown, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    declarations: [CurrencyConversionComponent, CurrencyInputComponent],
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        CurrencyConversionRoutingModule,
        StoreModule.forFeature(currencyConversionStateKey, reducers),
        EffectsModule.forFeature([CurrencyEffects])
    ],
    providers: [CurrencyService]
})
export class CurrencyConversionModule {}
