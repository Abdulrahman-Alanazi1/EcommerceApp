import { View, Text, StyleSheet, FlatList, Image, ScrollView, SafeAreaView } from "react-native";

export default function PicksForYou() {
    const dataList = [
        {
            id: "1",
            img: "https://daganghalal.blob.core.windows.net/41431/Product/1000x1000__samsunggalaxys22-1664952133029.png",
            title: "Samsung Galaxy S24 Ultra, 512 GB, 12 GB Ram, 5G, Black",
            price: "3500SR"
        },
        {
            id: "2",
            img: "https://m.media-amazon.com/images/I/61nAMlQGyjL._AC_SL1500_.jpg",
            title: "BESTEK Universal Travel Adapter",
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
        <SafeAreaView style={styles.container}>
            <Text style={styles.titlePage}>Top Picks For You </Text>
            <FlatList
                horizontal
                data={dataList}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.listContainer} key={item.id}>
                            <Image style={styles.img} source={{ uri: item.img }} />
                            <Text ellipsizeMode="tail" numberOfLines={2} style={styles.title}>{item.title}</Text>
                            <Text style={{ paddingTop: 2, textAlign:"left", width:"100%" }}>{item.price}</Text>
                        </View>
                    )
                }}

            />
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    titlePage: {
        fontSize: 17,
        padding: 10
    },
    listContainer: {
        justifyContent: "center",
        alignItems: "center",
        margin: 5,
        borderRadius: 4,
        backgroundColor: "white",
        elevation: 5
    },

    img: {
        width: "100%",
        height: 130,
        resizeMode: "center",

    },
    title: {
        width: 200,
        fontSize: 12,
        fontWeight: "400",
        margin: 1
    },

})