import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface GlobalState {
  userInfo: {
    name: string
  }
}

const initialState: GlobalState = {
  userInfo: {
    name: '',
  },
}

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setUserInfo(state, action: PayloadAction<{ name: string }>) {
      state.userInfo = action.payload
    },
  },
})

export const { setUserInfo } = globalSlice.actions

export default globalSlice.reducer
