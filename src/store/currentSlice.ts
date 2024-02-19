import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CurrentState {
  rounds: number,
  roundsWirtRest: number,
  isTap: boolean,
  progressTime: number
}

const initialState: CurrentState = {
  rounds: 0,
  roundsWirtRest: 0,
  isTap: false,
  progressTime: 0
}

export const currentSlice = createSlice({
  name: 'current',
  initialState,
  reducers: {
    updateCurrent:  (state, action: PayloadAction<CurrentState>) => {
        state.rounds = action.payload.rounds;
        state.roundsWirtRest = action.payload.roundsWirtRest;
        state.isTap = action.payload.isTap;
        return
    },
    updateRounds: (state, action: PayloadAction<number>) => {
        state.rounds = action.payload
    },
    updateRoundsWithRest: (state, action: PayloadAction<number>) => {
        state.roundsWirtRest = action.payload
    },
    updateIsTap: (state, action: PayloadAction<boolean>) => {
        state.isTap = action.payload
    },
    updateProgressTime: (state, action: PayloadAction<number>) => {
      state.progressTime = action.payload
  },
  },
})

export const { updateCurrent, updateRounds, updateIsTap, updateRoundsWithRest, updateProgressTime } = currentSlice.actions

export default currentSlice.reducer