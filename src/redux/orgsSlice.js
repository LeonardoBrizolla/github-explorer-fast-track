import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'orgs',
  initialState: {
    repos: [],
    repoName: '',
    isRepoFounded: false,
  },

  reducers: {
    fetchOrgRequest(state, action) {
      return { ...state, isRepoFounded: true, repoName: action.payload };
    },
    fetchOrgSuccess(state, action) {
      return { ...state, repos: action.payload };
    },
    fetchOrgFailure(state) {
      return { ...state, isRepoFounded: false, repoName: '', repos: [] };
    },
  },
});

export const { fetchOrgRequest, fetchOrgSuccess, fetchOrgFailure } =
  slice.actions;

export const selectOrgs = (state) => state.orgs;

export default slice.reducer;
