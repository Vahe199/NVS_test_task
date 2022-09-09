import axios from "axios";
import {ICat, ICategories} from "../types/ICat";
import {createAsyncThunk} from "@reduxjs/toolkit";


export const fetchCatCategories = createAsyncThunk(
    'cat/fetchCatCategories',
    async (_,thunkAPI) => {
        try {
            const response = await axios.get<ICategories[]>('https://api.thecatapi.com/v1/categories');
            return response.data;
        }catch (e) {
           return thunkAPI.rejectWithValue('something went wrong')
        }

    }
)

export const fetchCats = createAsyncThunk(
    'cat/fetchCats',
    async ({id,limit}:any,thunkAPI) => {
        try {
            const response = await axios.get<ICat[]>(`https://api.thecatapi.com/v1/images/search?limit=${limit}&page=1&category_ids=${id} `);
            return response.data;
        }catch (e) {
            return thunkAPI.rejectWithValue('something went wrong')
        }

    }
)
