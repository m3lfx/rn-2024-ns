import React from 'react';
import { StyleSheet, TouchableOpacity, ScrollView, FlatList, View } from 'react-native';
import { Badge, Text, VStack, Divider, HStack } from 'native-base';


const CategoryFilter = (props) => {

    return(
        
            <ScrollView
                bounces={true}
                horizontal={true}
                style={{ backgroundColor: "#f2f2f2" }}
            >
                <VStack space={4} divider={<Divider />} w="100%">
                    <HStack justifyContent="space-between">
                        <TouchableOpacity key={1} >
                            <Badge style={[styles.center, {margin: 4}]}>
                                <Text style={{ color: 'black'}}>name</Text>
                            </Badge>
                            
                        </TouchableOpacity>
                    </HStack>
                </VStack>
                     {/* <FlatList style={{ margin: 0, padding: 0, borderRadius: 0 }} nestedScrollEnabled={true} horizontal={true}> 
                        <TouchableOpacity key={1} >
                            <Badge style={[styles.center, {margin: 5}]}>
                                <Text style={{ color: 'red'}}>name</Text>
                            </Badge>
                        </TouchableOpacity>
                     </FlatList>  */}
                
                {/* <Badge style={[styles.center, {margin: 5}]}>
                                <Text style={{ color: 'white'}}>name</Text>
                            </Badge> */}
            </ScrollView>
            
               
    )
}

const styles = StyleSheet.create({
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    active: {
        backgroundColor: '#03bafc'
    },
    inactive: {
        backgroundColor: '#a0e1eb'
    }
})

export default CategoryFilter;