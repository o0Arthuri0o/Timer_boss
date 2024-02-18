import { configureStore } from '@reduxjs/toolkit'
import settingsReducer from './settingsSlice'
import currentReducer from './currentSlice'

export const store = configureStore({
  reducer: {
    settings: settingsReducer,
    current: currentReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch