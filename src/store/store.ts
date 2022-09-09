import {configureStore,combineReducers} from "@reduxjs/toolkit"
import userReducer from "./reducers/CatSlice"
const rootReducer = combineReducers({
    cat:userReducer
})

export const setupStore = () => {
    return configureStore({
        reducer:rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
