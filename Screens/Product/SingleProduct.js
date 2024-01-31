import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, ScrollView,  } from "react-native";
import { Left, HStack, Heading, Image, Button, Center } from 'native-base'

const SingleProduct = ({ route }) => {
    console.log(route.params.item)
    const [item, setItem] = useState(route.params.item);
    const [availability, setAvailability] = useState('')

    return (
        <Center flexGrow={1}>
        <Image
            source={{
                uri: item.image ? item.image : 'https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png'
            }}
            resizeMode="contain"
            style={styles.image}
            alt="default image"
            size="l"
        />
        <View style={styles.contentContainer}>
            <Heading style={styles.contentHeader} size='xl'>{item.name}</Heading>
            <Text style={styles.contentText}>{item.brand}</Text>
        </View>
        <View style={styles.bottomContainer}>
            <HStack space={3} justifyContent="center">
                <Text style={styles.price}>${item.price}</Text>
                <Button size="sm" ><Text>Add</Text></Button>
            </HStack>
            
        </View>
    </Center>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        height: '100%'
    },
    imageContainer: {
        backgroundColor: 'white',
        padding: 0,
        margin: 0
    },
    image: {
        width: '100%',
        height: 250
    },
    contentContainer: {
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    contentHeader: {
        fontWeight: 'bold',
        marginBottom: 20
    },
    contentText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20
    },
    bottomContainer: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        left: 0,
        backgroundColor: 'white'
    },
    price: {
        fontSize: 24,
        margin: 20,
        color: 'red'
    },
    availabilityContainer: {
        marginBottom: 20,
        alignItems: "center"
    },
    availability: {
        flexDirection: 'row',
        marginBottom: 10,
    }
})

export default SingleProduct