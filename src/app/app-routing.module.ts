import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: 'currency-conversion',
        loadChildren: () =>
            import('./currency-conversion/currency-conversion.module').then(
                (m) => m.CurrencyConversionModule
            ),
    },
    { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
    {
        path: '**',
        redirectTo: 'currency-conversion',
        pathMatch: 'full',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
