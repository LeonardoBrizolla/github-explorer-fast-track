import { call, put, takeEvery } from 'redux-saga/effects';
import api from '../services/api';
import { fetchOrgRequest, fetchOrgSuccess, fetchOrgFailure } from './orgsSlice';

export function* fetchRepoOrg(action) {
  try {
    const response = yield call(api.get, `orgs/${action.payload}/repos`);
    if (response.status === 200) {
      yield put(fetchOrgSuccess(response.data));
    }
  } catch (error) {
    console.log(error);
    yield put(fetchOrgFailure(error));
  }
}

export function* mySaga() {
  yield takeEvery(fetchOrgRequest.type, fetchRepoOrg);
}
