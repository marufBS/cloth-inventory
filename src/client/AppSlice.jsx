import { createSlice } from '@reduxjs/toolkit'

const appSlice = createSlice({
  name: 'app',
  initialState: {
    mainHeight: 0,
    darkTheme: false,
  },
  reducers: {
    setMainHeight: ((state, action) => {
      state.mainHeight = action.payload
    }),
    tootgleTheme: ((state) => {
      state.darkTheme = !state.darkTheme;
  })
  }
})

export const { setMainHeight,tootgleTheme } = appSlice.actions
export default appSlice.reducer;