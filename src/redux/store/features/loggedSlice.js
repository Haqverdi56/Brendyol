import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
    user: {},
    token: {}
}

export const loginSlice = createSlice({
    name: 'login',
    initialState, 
    reducers: {
        login: (state, {payload}) => {
            const token = payload
            state.token = token
        },
        logout: (state, {payload}) => {
            state.token = ""
        }
    }
})


export const { login, logout } = loginSlice.actions

export default loginSlice.reducer;