import * as amount from '../actions/amount';
import { createReducer, on, Action } from '@ngrx/store';
import { act } from '@ngrx/effects';

export const initialState = 1;
const amountReducer = createReducer(
    initialState,
    on(amount.AmountChangeAction, (state, { amountNumber }) => {
        return amountNumber;
    })
);

export function reducer(state: number, action: Action): number {
    return amountReducer(state, action);
}
