import {createAsyncThunk} from "@reduxjs/toolkit";
import API from "../../../api/api";


export const fetchFilmById = createAsyncThunk(
    "films/fetchFilmById",
    async (params) => {
        const response = await API({
            method: "GET",
            params
        })
        return response.data
    }
)

export const fetchBrowseFilms = createAsyncThunk(
    "films/browse",
    async (params) => {
        const response = await API({
            method: "GET",
            params
        })
        return response.data.Search
    }
)

export const fetchSearchFilms = createAsyncThunk(
    "films/search",
    async (params) => {
        const response = await API({
            method: "GET",
            params
        })
        return response.data.Search
    }
)




