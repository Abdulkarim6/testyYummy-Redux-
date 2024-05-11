import {configureStore} from "@reduxjs/toolkit"
import menuSlice from "../features/menuSlice/menuSlice"

export const store = configureStore({
    reducer : {
       menuFilter : menuSlice
    },
    middleware : (getDefaultMiddleware)=> getDefaultMiddleware().concat()
})

