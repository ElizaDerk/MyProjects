import {configureStore} from "@reduxjs/toolkit";
import filmsReducer from "./features/films/filmsSlice"
import usersReducer from "./features/users/usersSlice"

export const store = configureStore({
    reducer: {
        films: filmsReducer,
        users: usersReducer
    }
})
