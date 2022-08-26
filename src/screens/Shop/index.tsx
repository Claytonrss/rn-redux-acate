import React from 'react'
import { FlatList, ScrollView, StyleSheet, View } from 'react-native'
import Cart from '../../components/Cart'
import ProductCard from '../../components/ProductCard'
import { products } from '../../constants'

const Shop = () => {
  return (
    <View style={styles.container}>
      <Cart />
      <FlatList
        data={products}
        keyExtractor={item => item.name}
        renderItem={({ item }) => <ProductCard key={item.id} product={item} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#1f1e25', minHeight: '100%' },
})

export default Shop
