import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk(
  'auth/register',
  async ({ name, email, password }, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/signup', {
        name,
        email,
        password,
      });
      token.set(data.token);
      console.log('data', data);
      return data;
    } catch (error) {
      console.log('Error', error.response.status);
      return thunkAPI.rejectWithValue(error.response.status);
    }
  }
);

const login = createAsyncThunk(
  'auth/login',
  async ({ email, password }, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/login', { email, password });
      token.set(data.token);
      return data;
    } catch (error) {
      console.log('Error', error.response.status);
      return thunkAPI.rejectWithValue(error.response.status);
    }
  }
);

const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    token.unset();
  } catch (error) {
    console.log('Error', error.response.status);
    return thunkAPI.rejectWithValue(error.response.status);
  }
});

const getCurrentUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedToken = state.auth.token;

  if (persistedToken === null) {
    return thunkAPI.rejectWithValue();
  }

  token.set(persistedToken);
  try {
    const { data } = await axios.get('/users/current');
    return data;
  } catch (error) {
    console.log('Error', error.response.status);
    return thunkAPI.rejectWithValue(error.response.status);
  }
});

const authOperations = {
  register,
  login,
  logout,
  getCurrentUser,
};
export default authOperations;
