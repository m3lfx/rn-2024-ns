import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native'

import ProductList from "./ProductList";

const data = require('../../assets/data/products.json')
const ProductContainer = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        setProducts(data);
        return () => {
            setProducts([])
        }
    }, [])
    return (
        <View>
            <Text>Product Container</Text>
            <View style={{ marginTop: 200 }} >
                <FlatList
                    // horizontal
                    columnWrapperStyle={{justifyContent: 'space-between'}}
                    numColumns={2}
                    data={products}
                    renderItem={({ item }) => <ProductList key={item._id} item={item}/>}
                    keyExtractor={item => item.name}
                />
            </View>
        </View>
    )
}

export default ProductContainer;