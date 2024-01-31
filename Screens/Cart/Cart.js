import React from 'react'
import {Text, View} from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native';
import * as actions from '../../Redux/Actions/cartActions'

const Cart =() => {
    const navigation = useNavigation()
    dispatch = useDispatch()
    const cartItems = useSelector(state => state.cartItems)
   
    return (
        <View style={{flex:1}}>
        {cartItems.map(x => {
             console.log(x)
          return(
            <Text>{x.name}</Text>
          )
        })}
      </View>
    )
}

export default Cart