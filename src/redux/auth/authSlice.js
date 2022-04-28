import { createSlice } from '@reduxjs/toolkit';
import authOperations from './authOperations';

const initialState = {
  user: { name: '', email: '' },
  token: null,
  isLoggedIn: false,
  error: null,
  loading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.register.fulfilled]: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.loading = false;
      state.isLoggedIn = true;
    },
    [authOperations.register.pending]: state => {
      state.loading = true;
      state.error = null;
    },
    [authOperations.register.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [authOperations.login.fulfilled]: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.loading = false;
      state.isLoggedIn = true;
    },
    [authOperations.login.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [authOperations.login.pending]: state => {
      state.loading = true;
      state.error = null;
    },
    [authOperations.logout.fulfilled]: (state, action) => {
      state.user = { name: '', email: '' };
      state.token = null;
      state.isLoggedIn = false;
      state.loading = false;
    },
    [authOperations.logout.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [authOperations.logout.pending]: state => {
      state.loading = true;
      state.error = null;
    },
    [authOperations.getCurrentUser.fulfilled]: (state, { payload }) => {
      state.user = payload;
      state.isLoggedIn = true;
      state.loading = false;
    },
    [authOperations.getCurrentUser.pending]: state => {
      state.loading = true;
      state.error = null;
    },
    [authOperations.getCurrentUser.rejected]: state => {
      state.loading = false;
    },
  },
});

export default authSlice.reducer;
