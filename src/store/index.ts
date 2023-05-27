import {configureStore} from '@reduxjs/toolkit';
import searchReducer from './searchSlice';
// import {userApi} from '../../components/UserApi';

export const store = configureStore({
	reducer: {
		search: searchReducer,
		// userApi: userApi.reducer,
	},
	// middleware(getDefaultMiddleware) {
	// 	return getDefaultMiddleware().concat(userApi.middleware);
	// },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
