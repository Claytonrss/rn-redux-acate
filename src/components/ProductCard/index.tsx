import React from 'react'
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  Button,
} from 'react-native'
import { useDispatch } from 'react-redux'
import {
  addNewItemToCart,
  removeItemFromCart,
} from '../../store/modules/cart/reducer'
import { IProduct } from '../../types'

type Props = {
  product: IProduct
}

const ProductCard = ({ product }: Props) => {
  const dispatch = useDispatch()

  function handleAddNewItemToCart() {
    dispatch(addNewItemToCart(product))
  }
  function handleRemoveItemFromCart() {
    dispatch(removeItemFromCart(product))
  }

  return (
    <View style={styles.card}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.brand}>{product.brand}</Text>
        <Text>
          {Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(product.price)}
        </Text>
        <View>
          <TouchableOpacity
            onPress={handleAddNewItemToCart}
            style={[styles.button, styles.addCart]}
          >
            <Text>Adicionar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.removeCart]}
            onPress={handleRemoveItemFromCart}
          >
            <Text>Remover</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 32,
    flexDirection: 'row',
    backgroundColor: '#FDFCFE',
    borderRadius: 6,
  },
  info: {
    marginTop: 16,
  },
  image: { width: 200, height: 200 },
  name: { fontSize: 16 },
  brand: { color: '#6B6B6B', marginBottom: 8 },
  price: {},
  button: {
    width: 80,
    height: 32,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  addCart: {
    backgroundColor: '#31CF67',
    marginTop: 16,
  },
  removeCart: {
    backgroundColor: '#E23C44',
  },
})

export default ProductCard
