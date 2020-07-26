import { createAction, props } from '@ngrx/store';
export const AMOUNTCHANGE = '[Amount] Change';

export const AmountChangeAction = createAction(
    AMOUNTCHANGE,
    props<{ amountNumber: number }>()
);
