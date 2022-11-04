import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    user: {},
    isAuthenticated: JSON.parse(localStorage.getItem('logged-in'))
}

const usersSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logUserIn: (state) => {
            localStorage.setItem('logged-in', true)
            state.isAuthenticated = JSON.parse(localStorage.getItem('logged-in'))
        },
        logUserOut: (state) => {
            localStorage.setItem('logged-in', false)
            state.isAuthenticated = JSON.parse(localStorage.getItem('logged-in'))
        },
    }
})

export const {logUserIn, logUserOut} = usersSlice.actions
export default usersSlice.reducer;
