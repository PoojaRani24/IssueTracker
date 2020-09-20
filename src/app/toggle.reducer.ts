import { createReducer, on } from '@ngrx/store';
import { change } from './toggle.actions';

export const initialState = 0;

const CounterReducer = createReducer(
  initialState,
  on(change, (state) => state + 1),
);

export function counterReducer(state= initialState, action: any): any {
  return CounterReducer(state, action);
}
