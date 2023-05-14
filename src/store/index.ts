import {Action, configureStore, ThunkAction} from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import ReducerGlobal from './ReducerGlobal';

const store = configureStore({
    reducer: {
        global: ReducerGlobal,
    }
});

export default store;

// export type AppDispatch = typeof store.dispatch;
// export type RootState = ReturnType<typeof store.getState>;
// export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
// export const useAppDispatch = () => useDispatch<AppDispatch>();



