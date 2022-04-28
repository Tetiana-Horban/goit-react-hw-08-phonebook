import { createReducer } from '@reduxjs/toolkit';
import { changeFilter } from './filter-action';
export const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});
