import { createAction, props } from '@ngrx/store';

const COUNTRIESUPDATE = '[Countries] Update';
const COUNTRIESUPDATED = '[Countries] Updated';

export const CountriesUpdateAction = createAction(COUNTRIESUPDATE);

export const CountriesUpdatedAction = createAction(
    COUNTRIESUPDATED,
    props<{countries: Array<string>}>()
);
