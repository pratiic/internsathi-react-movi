import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
    name: "search",
    initialState: {
        results: [],
        query: "",
    },
    reducers: {
        setResults: (state, action) => {
            state.results = action.payload;
        },
        setQuery: (state, action) => {
            state.query = action.payload;
        },
    },
});

export default searchSlice.reducer;

export const { setResults, setQuery } = searchSlice.actions;
