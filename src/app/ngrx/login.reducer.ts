import { createReducer, on } from '@ngrx/store';
import { login, logout } from './login.actions';

export const initialState = false;

export const loginReducer = createReducer(
  initialState,
  on(login, (state) => true),
  on(logout, (state) => false),
);