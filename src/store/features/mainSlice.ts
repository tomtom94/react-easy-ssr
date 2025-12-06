import { createSlice } from '@reduxjs/toolkit'

interface InitialState {
  language: null | string | string[]
  timezone: null | string
  userAgent: null | unknown
  hostname: null | string
}

export const initialState: InitialState = {
  language: null,
  timezone: null,
  userAgent: null,
  hostname: null
}

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    setTimezone: (state, action) => {
      const { timezone } = action.payload
      state.timezone = timezone
    }
  },
  selectors: {
    selectTimezone: (state) => state.timezone
  }
})

export const { setTimezone } = mainSlice.actions
export const { selectTimezone } = mainSlice.selectors
