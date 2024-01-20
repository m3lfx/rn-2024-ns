import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList, ActivityIndicator, Dimensions } from 'react-native'
import { Container, VStack, Input, Heading, Text, Icon, NativeBaseProvider, extendTheme } from "native-base";
import { Ionicons } from "@expo/vector-icons";

import ProductList from "./ProductList";

const data = require('../../assets/data/products.json')
const newColorTheme = {
    brand: {
        900: "#8287af",
        800: "#7c83db",
        700: "#b3bef6",
    },
};
const theme = extendTheme({ colors: newColorTheme });
var { width, height } = Dimensions.get("window")
const ProductContainer = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        setProducts(data);
        return () => {
            setProducts([])
        }
    }, [])
    // return (
    //     <View>
    //         <Text>Product Container</Text>
    //         <View style={{ marginTop: 50 }} >
    //             <FlatList
    //                 // horizontal
    //                 columnWrapperStyle={{justifyContent: 'space-between'}}
    //                 numColumns={2}
    //                 data={products}
    //                 renderItem={({ item }) => <ProductList key={item._id} item={item}/>}
    //                 keyExtractor={item => item.name}
    //             />
    //         </View>
    //     </View>
    // )

    return (
        <NativeBaseProvider theme={theme}>
            <Container>
                
                <VStack w="100%" space={5} alignSelf="center">
                    <Heading fontSize="lg">Search</Heading>
                    <Input placeholder="Search" variant="filled" width="100%" borderRadius="10" py="1" px="2" InputRightElement={<Icon ml="2" size="4" color="gray.400" as={<Ionicons name="search" />} />} />
                </VStack>
                <View>
                    <Text>Product Container</Text>
                    <View style={styles.listContainer} >
                        <FlatList
                            //    horizontal
                            columnWrapperStyle={{ justifyContent: 'space-between' }}
                            numColumns={2}
                            data={products}
                            
                            renderItem={({ item }) => <ProductList key={item.id} item={item} />}
                            keyExtractor={item => item.name}
                        />
                    </View>
                </View>
            </Container>
        </NativeBaseProvider>
    )
}

const styles = StyleSheet.create({
    container: {
      flexWrap: "wrap",
      backgroundColor: "gainsboro",
    },
    listContainer: {
      height: height,
      width: width,
      flex: 1,
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "wrap",
      backgroundColor: "gainsboro",
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    }
  });

export default ProductContainer;