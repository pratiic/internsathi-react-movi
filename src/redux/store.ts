import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import searchReducer from "./slices/search-slice";

export const store = configureStore({
    reducer: {
        search: searchReducer,
    },
    middleware: [logger],
});
