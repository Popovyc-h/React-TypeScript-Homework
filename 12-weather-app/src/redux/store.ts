import { configureStore } from '@reduxjs/toolkit'
import weaterReducer from '@/redux/weather/weatherSlice'

export const store = configureStore({
  reducer: {
    weather: weaterReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
