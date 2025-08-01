import { createReducer, on } from '@ngrx/store';
import {
  decrementCounter,
  incrementCounter,
  resetCounter,
} from './couter.actions';

const initialValue = 0;
export const createCounter = createReducer(
  initialValue,
  on(incrementCounter, (state) => state + 1),
  on(decrementCounter, (state) => state - 1),
  on(resetCounter, (state) => 0)
);
