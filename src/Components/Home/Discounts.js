import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image, ScrollView } from 'react-native'
import React from 'react'

export default function Descounts() {
    const discountList = [
        {
            id: "1",
            img: "https://daganghalal.blob.core.windows.net/41431/Product/1000x1000__samsunggalaxys22-1664952133029.png",
            title: "Samsung Galaxy S24 Ultra, 512 GB, 12 GB Ram, 5G, Black",
            price: "3500SR"
        },
        {
            id: "2",
            img: "https://www.jarir.com/cdn-cgi/image/fit=contain,width=auto,height=auto,quality=85,metadata=none/https://ak-asset.jarir.com/akeneo-prod/asset/9/5/c/f/95cfabf458138a6c81a50c84b8cc9b7c9410fe35_623509.jpg",
            title: "Apple Iphone 15 plus, 512 GB, 12 GB Ram, 5G, yellow",
            price: "3500SR"
        },
        {
            id: "3",
            img: "https://m.media-amazon.com/images/I/61b-75iHbuL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
            title: "Amazfit GTR Mini Smart Watch",
            price: "3500SR"
        },
        {
            id: "4",
            img: "https://m.media-amazon.com/images/I/611Ve1v0oXL._AC_SL1500_.jpg",
            title: "OTTOCAST P3 CarPlay AI Box",
            price: "3500SR"
        },
        {
            id: "5",
            img: "https://m.media-amazon.com/images/I/71XuoZmXnhL._AC_SL1500_.jpg",
            title: "BOSS Audio Systems ",
            price: "3500SR"
        },
        {
            id: "6",
            img: "https://m.media-amazon.com/images/I/71XuoZmXnhL._AC_SL1500_.jpg",
            title: "BOSS Audio Systems ",
            price: "3500SR"
        },
    ]
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.titlePage}>Mega Discounts </Text>
                <TouchableOpacity style={styles.discountMore}><Text style={{ color: "white", textAlign: "center" }}>More</Text></TouchableOpacity>
            </View>
            <FlatList
                data={discountList}
                keyExtractor={(item) => item.id}
                numColumns={2}
                scrollEnabled={false}
                renderItem={({ item }) => {
                    return (
                        <View key={item.id} style={styles.listContainer}>
                            <Image style={styles.img} source={{ uri: item.img }} />
                            <Text ellipsizeMode="tail" numberOfLines={2} style={styles.title}>{item.title}</Text>
                            <View style={styles.discountPricesView}>
                                <Text style={styles.price}>{item.price}</Text>
                                <Text style={styles.discountPrice}>{item.price}</Text>
                            </View>
                        </View>
                    )
                }} />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "lightblue",
    },
    titleContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: 5,
        padding: 10
    },
    titlePage: {
        fontSize: 17
    },
    discountMore: {
        width: 80,
        backgroundColor: "#4362e9e8",
        padding: 5,
        borderRadius: 5,
        elevation: 5
    },
    // flat list styling
    listContainer: {
        flex:1,
        alignItems: "center",
        margin: 5,
        borderRadius: 4,
        backgroundColor: "white",
        elevation: 5,
    },
    img: {
        width: 100,
        height: 150,
        resizeMode: "center",

    },
    title: {
        width:"100%",
        fontSize: 14,
        fontWeight: "400",
        textAlign:"auto"
    },
    discountPricesView: {
        width: "100%",
        paddingTop: 10,
        flexDirection: "row",
        justifyContent: 'space-between'
    },
    discountPrice: {
        color: "red",
        fontSize: 10,
        textAlignVertical: 'bottom',
        textDecorationLine: "line-through"
    },

})