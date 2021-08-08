import { createReducer, on } from '@ngrx/store';
import { TOGGLE_SECTION_VISIBILITY } from './checkbox-config.actions';

export const initialState = false;

export const _checkboxConfigReducer = createReducer(
  initialState,
  on(TOGGLE_SECTION_VISIBILITY, state => !state)
);

export function checkboxConfigReducer(state, action) {
  return _checkboxConfigReducer(state, action);
}
