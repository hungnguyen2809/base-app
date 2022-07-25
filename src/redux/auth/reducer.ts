import { createReducer } from '@reduxjs/toolkit';
import { actionAuthLogin, actionAuthSetToken } from './actions';

interface AuthState {
  token?: string;
  userInfo?: {
    email?: string;
    password?: string;
  };
}

const initState: AuthState = {};

const authReducer = createReducer(initState, (builder) => {
  builder.addCase(actionAuthLogin.fulfilled, (state, action) => {
    state.token = JSON.stringify(action.payload);
    state.userInfo = action.payload;
  });
  builder.addCase(actionAuthSetToken, (state, action) => {
    state.token = JSON.stringify(action.payload);
    state.userInfo = action.payload;
  });
});

export default authReducer;
