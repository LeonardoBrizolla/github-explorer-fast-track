import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'orgs',
  initialState: {
    name: '',
    isClear: false,
  },
  reducers: {
    changeOrgs(state, action) {
      return { ...state, isClear: false, name: action.payload };
    },
    ClearOrgs(state) {
      return { ...state, isClear: true, name: '' };
    },
  },
});

export const { changeOrgs, ClearOrgs } = slice.actions;

export const selectOrgs = (state) => state.orgs;

export default slice.reducer;
