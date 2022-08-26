import { combineReducers, configureStore } from '@reduxjs/toolkit'
import cartData from './modules/cart/reducer'

const rootReducers = combineReducers({
  cart: cartData,
})

const store = configureStore({
  reducer: rootReducers,
})

export default store

export type RootState = ReturnType<typeof store.getState>
