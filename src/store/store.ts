import { createStore } from 'redux';

import { appReducer } from './reducers';

export const store = createStore(appReducer);

export type RootState = ReturnType<typeof appReducer>;
