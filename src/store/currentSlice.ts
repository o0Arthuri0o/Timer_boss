import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CurrentState {
  rounds: number,
  roundsWirtRest: number,
  isTap: boolean
}

const initialState: CurrentState = {
  rounds: 0,
  roundsWirtRest: 0,
  isTap: false
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
    }
  },
})

export const { updateCurrent, updateRounds, updateIsTap, updateRoundsWithRest } = currentSlice.actions

export default currentSlice.reducer