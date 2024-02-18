import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface SettingsState {
  work: number,
  rest: number,
  rounds: number
}

const initialState: SettingsState = {
  work: 0,
  rest: 0,
  rounds: 0
}

export const currentSlice = createSlice({
  name: 'current',
  initialState,
  reducers: {
    updateCurrent:  (state, action: PayloadAction<SettingsState>) => {
        state.work = action.payload.work;
        state.rest = action.payload.rest;
        state.rounds = action.payload.rounds;
        return
    },
    updateWork: (state, action: PayloadAction<number>) => {
        state.work = action.payload
    },
    updateRest: (state, action: PayloadAction<number>) => {
        state.rest = action.payload
    },
    updateRounds: (state, action: PayloadAction<number>) => {
        state.rounds = action.payload
    }
  },
})

export const { updateCurrent, updateRest, updateRounds, updateWork } = currentSlice.actions

export default currentSlice.reducer