import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

export default function UseSimpleList({ list, firstRef, onPress }) {
    return (
        <View>
            <View style={styles.simpleList}>
                <FlatList
                    data={list}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item) => item.id.toString()}
                    ref={firstRef}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.itemsContainer} key={item.id} >
                                <TouchableOpacity style={styles.button} onPress={() => { onPress(item.title) }}>
                                    <Text ellipsizeMode='tail' numberOfLines={1} style={{ fontSize: 12, color: "black", width: 100, fontWeight: "bold" }}>{item.title}</Text>
                                </TouchableOpacity>
                            </View>
                        )
                    }} />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    simpleList: {
        flex: 1,
        backgroundColor: "#9bc7d6",
        margin: 5,
        borderRadius: 5,
        elevation: 5,
    },
    itemsContainer: {
        marginTop: 20,
        padding: 5
    },
    button: {
        padding: 5,
        borderBottomWidth: 1,
        borderColor: "#019DFD",
        cursor: "pointer"
    }
})