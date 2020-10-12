import { createReducer, on, Action } from '@ngrx/store';
import { CountriesUpdatedAction } from '../actions/country';

export const initialCountriesState = [];

const CountryReducerMethod = createReducer(
    initialCountriesState,
    on(CountriesUpdatedAction, (state, { countries }) => countries)
);

export function CountryReducer(
    state: Array<string>,
    action: Action
): Array<string> {
    return CountryReducerMethod(state, action);
}
