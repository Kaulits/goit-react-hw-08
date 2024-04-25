import { createSlice } from "@reduxjs/toolkit"
import { loginThunk, refreshThunk, registerThunk } from "./operations"
import { logoutThunk } from "./operations"

const initialState = {
    user: {
        name: '',
        email: '',
    },
    token: '',
    isLoggedIn: false
}

const slice = createSlice({
    name: 'auth',
    initialState,
    selectors: {
        selectToken: state => state.token,
        selectUser: state => state.user.email,
        selectIsLoggedIn: state => state.isLoggedIn
    },
    extraReducers: builder => {
        builder.addCase(registerThunk.fulfilled, (state, { payload }) => {
            state.user.name = payload.user.name
            state.user.email = payload.user.email
            state.token = payload.token
            state.isLoggedIn = true
        })
            .addCase(loginThunk.fulfilled, (state, { payload }) => {
            state.user.name = payload.user.name
            state.user.email = payload.user.email
            state.token = payload.token
            state.isLoggedIn = true
            })
            .addCase(logoutThunk.fulfilled, () => {
            return initialState
            })
            .addCase(refreshThunk.fulfilled, (state, { payload }) => {
            state.user.name = payload.name
            state.user.email = payload.email
            state.isLoggedIn = true

        })
    }
})

export const authReducer = slice.reducer
export const {selectIsLoggedIn, selectToken, selectUser} = slice.selectors