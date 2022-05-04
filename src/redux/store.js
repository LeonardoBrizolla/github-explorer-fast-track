import { configureStore } from '@reduxjs/toolkit';
import orgsReducer from './orgsSlice';
import createSagaMiddleware from 'redux-saga';

import { mySaga } from './sagas';

let sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

export default configureStore({
  reducer: {
    orgs: orgsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
});

sagaMiddleware.run(mySaga);
