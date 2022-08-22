import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface UserInfo {
  name: string
  center: string
  phone: string
}

interface GlobalState {
  userInfo: UserInfo
}

const initialState: GlobalState = {
  userInfo: {
    name: '',
    center: '',
    phone: '',
  },
}

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setUserInfo(state, action: PayloadAction<UserInfo>) {
      state.userInfo = action.payload
    },
  },
})

export const { setUserInfo } = globalSlice.actions

export default globalSlice.reducer
