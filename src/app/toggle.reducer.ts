import { createReducer, on } from '@ngrx/store';
import { change } from './toggle.actions';
// import { input } from './toggle.actions';

export const initialState = 0;

const _counterReducer = createReducer(
  initialState,
  on(change, (state) => state + 1),
  // on(input, )
);

export function counterReducer(state, action) {
  return _counterReducer(state, action);
}