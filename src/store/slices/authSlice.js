import { createSlice } from '@reduxjs/toolkit'
import { registerUser, userLogin } from '../../components/Authentication/authAction';

const initialState = {
    loading: false,
    userInfo: { username: "" },
    userToken: localStorage.getItem("userToken"),
    error: null,
    success: false,
}

const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout(state, action) {
            state.userToken = "";
            state.userInfo = { username: "" };
            state.error = null;
            state.isLoading = false;
            state.success = false;
        }
    },
    extraReducers: {
        // register user
        [registerUser.pending]: (state) => {
            state.loading = true
            state.error = null
        },
        [registerUser.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.success = true // registration successful
        },
        [registerUser.rejected]: (state, { payload }) => {
            state.loading = false
            state.error = payload
        },

        // login user
        [userLogin.pending]: (state) => {
            state.loading = true
            state.error = null
        },
        [userLogin.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.userInfo = payload
            state.userToken = payload.userToken
        },
        [userLogin.rejected]: (state, { payload }) => {
            state.loading = false
            state.error = payload
        },
    },
})

export const { logout } = AuthSlice.actions
export const authReducer = AuthSlice.reducer;
