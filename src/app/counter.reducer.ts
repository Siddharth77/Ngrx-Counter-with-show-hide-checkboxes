import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './counter.actions';
// import { TOGGLE_SECTION_VISIBILITY } from './column-configuration.actions';

// export const initialState = false;
export const initialState = 0;
// // to be renamed as _columnConfigurationReducer
const _counterReducer = createReducer(
  initialState,
  on(increment, state => state + 1), // to be removed
  on(decrement, state => state - 1), // to be removed
  on(reset, state => 0) // to be removed
  // on(toggleSectionVisibility, (state) => !state), // to be added
);

export function counterReducer(state, action) {
  return _counterReducer(state, action); // to be removed
  // return _columnConfigurationReducer(state,action); // to be added
}
