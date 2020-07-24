import { configureStore, combineReducers, getDefaultMiddleware } from '@reduxjs/toolkit'
import logger from 'redux-logger'

import formsSlice from './formsSlice'

const rootReducer = combineReducers({
  forms: formsSlice,
})

export default configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware(), logger],
})

export type RootState = ReturnType<typeof rootReducer>
