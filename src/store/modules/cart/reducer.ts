import { createSlice } from '@reduxjs/toolkit'
import { IItemCart, IProduct } from '../../../types'

type initialStateProps = {
  cart: IItemCart[]
}

const initialState: initialStateProps = {
  cart: [],
}

function getItemFromCart(cart: IItemCart[], product: IProduct): IItemCart[] {
  return cart.filter(({ item }) => item.id === product.id)
}

function getCartWithoutItem(cart: IItemCart[], product: IProduct): IItemCart[] {
  return cart.filter(({ item }) => item.id !== product.id)
}

const cartDataSlice = createSlice({
  name: 'cartData',
  initialState,
  reducers: {
    addNewItemToCart: (state, action) => {
      const productPayload: IProduct = action.payload
      const productInCart = getItemFromCart(state.cart, productPayload)

      if (productInCart.length > 0) {
        const cartWithoutItem = getCartWithoutItem(state.cart, productPayload)
        state.cart = [
          ...cartWithoutItem,
          { item: productPayload, quantity: productInCart[0].quantity + 1 },
        ]
      } else {
        state.cart = [...state.cart, { item: productPayload, quantity: 1 }]
      }
    },
    removeItemFromCart: (state, action) => {
      const productPayload: IProduct = action.payload
      const productInCart = getItemFromCart(state.cart, productPayload)
      if (productInCart.length > 0) {
        const cartWithoutItem = getCartWithoutItem(state.cart, productPayload)
        if (productInCart[0].quantity === 1) {
          state.cart = [...cartWithoutItem]
        } else {
          state.cart = [
            ...cartWithoutItem,
            { item: productPayload, quantity: productInCart[0].quantity - 1 },
          ]
        }
      }
    },
  },
})

export const { addNewItemToCart, removeItemFromCart } = cartDataSlice.actions
export const cartStateData = (state: initialStateProps) => state.cart

export default cartDataSlice.reducer
