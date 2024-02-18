import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

// const telegramStorage = window.Telegram.WebApp.CloudStorage


export interface SettingsState {
  work: number,
  rest: number,
  rounds: number
}

let initialState: SettingsState;

// const initValueFromStorage = telegramStorage.getItem('settings')

// initialState = JSON.parse(initValueFromStorage)
// if(!initValueFromStorage)
//   {
   
//   }
 initialState = {
      work: 25,
      rest: 5,
      rounds: 4
    }

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    updateSettings:  (state, action: PayloadAction<SettingsState>) => {
        state.work = action.payload.work;
        state.rest = action.payload.rest;
        state.rounds = action.payload.rounds;
        return
    },
  },
})

export const { updateSettings } = settingsSlice.actions

export default settingsSlice.reducer