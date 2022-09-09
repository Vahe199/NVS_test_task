import {ICat, ICategories} from "../types/ICat";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchCatCategories, fetchCats} from "./ActionCreators";

interface CatState {
    category: ICategories[];
    cat: ICat[];
    isLoading: boolean;
    error: string;
    limit:number
}

const initialState: CatState = {
    category:[],
    cat: [],
    isLoading: false,
    error: '',
    limit:10
}

export const catSlice = createSlice({
    name: 'cat',
    initialState,
    reducers: {
        increment(state, action: PayloadAction<number>) {
            state.limit += action.payload
        }
    },
    extraReducers: {
        [fetchCatCategories.pending.type]: (state) => {
            state.isLoading = true;
        },
        [fetchCatCategories.fulfilled.type]:(state, action: PayloadAction<ICategories[]>) => {
            state.isLoading = false;
            state.error = '';
            state.category = action.payload
        },
        [fetchCatCategories.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;

        },
        [fetchCats.pending.type]: (state) => {
            state.isLoading = true;
        },
        [fetchCats.fulfilled.type]: (state, action: PayloadAction<ICat[]>) => {
            state.isLoading = false;
            state.error = '';
            state.cat = action.payload
        },
        [fetchCats.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;

        },

    }
})
export const {increment} = catSlice.actions;
export default catSlice.reducer;

