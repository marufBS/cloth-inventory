import { createSlice } from '@reduxjs/toolkit'

const appSlice = createSlice({
  name: 'app',
  initialState: {
    mainHeight: 0
  },
  reducers: {
    setMainHeight: ((state, action) => {
      state.mainHeight = action.payload
    })
  }
})

export const { setMainHeight } = appSlice.actions
export default appSlice.reducer;