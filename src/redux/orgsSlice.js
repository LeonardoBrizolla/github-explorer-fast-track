import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'orgs',
  initialState: {
    repoName: '',
    isRepoFounded: false,
  },

  reducers: {
    changeRepoName(state, action) {
      return { ...state, isRepoFounded: true, repoName: action.payload };
    },
    clearOrgs(state) {
      return { ...state, isRepoFounded: false, repoName: '' };
    },
  },
});

export const { changeRepoName, clearOrgs } = slice.actions;

export const selectOrgs = (state) => state.orgs;

export default slice.reducer;
