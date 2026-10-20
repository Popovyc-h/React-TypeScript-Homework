import { createStore } from 'redux'
import BookReducer from '@/store/reducers/bookReducer'

export const store = createStore(BookReducer)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
