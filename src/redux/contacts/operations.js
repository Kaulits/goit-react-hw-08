import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";


axios.defaults.baseURL = 'https://6601ccd99d7276a75552310e.mockapi.io/'


export const fetchDataThunk = createAsyncThunk('fetchAll', async (_, thunkAPI) => {
    try {
        const { data } = await axios.get('/contacts')
        return data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})


     

export const deleteContactThunk = createAsyncThunk('deleteContact', async (id, thunkAPI) => {
    try {
        const { data } = await axios.delete(`contacts/${id}`)
        return data.id
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})


export const addContactThunk = createAsyncThunk('addContact', async (body, thunkAPI) => {
    try {
       const {data} = await axios.post(`/contacts`, body)
        return data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})

