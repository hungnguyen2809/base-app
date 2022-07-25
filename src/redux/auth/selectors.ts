import { RootState } from 'src/app/store';

export const selectAuthToken = (state: RootState) => state.auth.token;
