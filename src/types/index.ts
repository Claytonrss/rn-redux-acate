export interface IProduct {
  id: number
  name: string
  brand: string
  image: string
  price: number
  stock: boolean
}

export interface IItemCart {
  item: IProduct
  quantity: number
}
