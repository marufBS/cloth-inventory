import { createSlice } from '@reduxjs/toolkit'

const appSlice = createSlice({
  name: 'app',
  initialState: {
    mainWidth: 0,
    darkTheme: false,
  },
  reducers: {
    setMainWidth: ((state, action) => {
      state.mainWidth = action.payload
    }),
    tootgleTheme: ((state) => {
      state.darkTheme = !state.darkTheme;
  })
  }
})

export const { setMainWidth,tootgleTheme } = appSlice.actions
export default appSlice.reducer;