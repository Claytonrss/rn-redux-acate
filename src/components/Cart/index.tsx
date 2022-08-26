import { AntDesign } from '@expo/vector-icons/'
import React, { useState } from 'react'
import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'

const Cart = () => {
  const { cart } = useSelector((state: RootState) => state.cart)
  const [modalVisible, setModalVisible] = useState(false)

  return (
    <>
      <TouchableOpacity
        style={styles.cart}
        onPress={() => setModalVisible(true)}
      >
        <AntDesign name="shoppingcart" size={32} color="#6B6B6B" />
        <Text>{cart.length} item(s)</Text>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible)
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.cartItems}>
            <View style={styles.cartItem}>
              <Text style={styles.cartItemText}>Item</Text>
              <Text style={styles.cartItemText}>Qtd.</Text>
            </View>
            {cart?.map(({ item, quantity }) => {
              return (
                item && (
                  <View key={item.id} style={styles.cartItem}>
                    <Text style={styles.cartItemText}>{item.name}</Text>
                    <Text style={styles.cartItemText}>{quantity}</Text>
                  </View>
                )
              )
            })}
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text>Fechar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </>
  )
}

const styles = StyleSheet.create({
  cart: {
    margin: 12,
    backgroundColor: '#FDFCFE',
    borderRadius: 6,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
  centeredView: {
    flex: 1,
    marginTop: 22,
  },
  cartItems: {
    marginHorizontal: 16,
    marginVertical: 10,
    paddingVertical: 35,
    backgroundColor: 'white',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  cartItem: {
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  cartItemText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  button: {
    marginHorizontal: 16,
    width: 100,
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
  buttonClose: {
    backgroundColor: '#f3e521',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
})

export default Cart
