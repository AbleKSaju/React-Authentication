import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import AuthSlice from './slices/AuthSlice'
import { apiSlice } from './slices/apiSlice'
const store = configureStore({
    reducer:{
        auth:AuthSlice,
        [apiSlice.reducerPath] : apiSlice.reducer
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(apiSlice.middleware),
    devTools:true
})
export default store