import { createAction } from '@ngrx/store';

export const incrementCounter = createAction('[Counter],Increment');
export const decrementCounter = createAction('[Counter],Decrement');
export const resetCounter = createAction('[Counter],Reset');
