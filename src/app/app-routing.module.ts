import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: 'currency-conversion',
        loadChildren: () =>
            import('./currency-conversion/currency-conversion-app.module').then(
                (m) => m.CurrencyConversionAppModule
            ),
    },
    {
        path: 'home',
        loadChildren: () =>
            import('./home/home.module').then((m) => m.HomeModule),
    },
    {
        path: '**',
        redirectTo: 'currency-conversion',
        pathMatch: 'full',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [
        {
            provide: LocationStrategy,
            useClass: HashLocationStrategy,
        },
    ],
})
export class AppRoutingModule {}
