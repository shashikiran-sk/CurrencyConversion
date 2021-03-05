import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CurrencyConversionComponent, CurrencyConversionModule } from 'currency-conversion-lib';

const routes: Routes = [{ path: '', component: CurrencyConversionComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes), CurrencyConversionModule],
    exports: [RouterModule],
})
export class CurrencyConversionRoutingModule {}
