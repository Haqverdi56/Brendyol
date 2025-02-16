import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: [],
}

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    sendCategoryName: (state, {payload}) => {
      state.value = payload
    }
  },
})

export const { sendCategoryName } = categorySlice.actions

export default categorySlice.reducer