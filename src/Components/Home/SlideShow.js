import { FlatList, StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
export default function SlideShow() {
    const navigation = useNavigation()
  
    const images = [
        {
            id: "1",
            img: "https://cdn-icons-png.flaticon.com/256/928/928002.png",
            title: "Men's wear"
        },
        {
            id: "2",
            img: "https://cdn-icons-png.flaticon.com/256/4615/4615784.png",
            title: "Men Hygiene"
        },
        {
            id: "3",
            img: "https://cdn-icons-png.flaticon.com/256/4264/4264828.png",
            title: "Women's Wear"
        },
        {
            id: "4",
            img: "https://cdn-icons-png.flaticon.com/256/2936/2936151.png",
            title: "Smart Phones"
        },
        {
            id: "5",
            img: "https://cdn-icons-png.flaticon.com/256/1807/1807383.png",
            title: "Beauty"
        },
        {
            id: "6",
            img: "https://cdn-icons-png.flaticon.com/256/1261/1261143.png",
            title: "Kitchen"
        },
        {
            id: "7",
            img: "https://cdn-icons-png.flaticon.com/256/2888/2888394.png",
            title: "Laptops"
        },
        {
            id: "8",
            img: "https://cdn-icons-png.flaticon.com/256/2268/2268728.png",
            title: "Discounts"
        },
        {
            id: "9",
            img: "https://cdn-icons-png.flaticon.com/256/502/502128.png",
            title: "Gym Tools"
        },
        {
            id: "10",
            img: "https://cdn-icons-png.flaticon.com/256/3227/3227053.png",
            title: "Books"
        },
        {
            id: "11",
            img: "https://cdn-icons-png.flaticon.com/256/539/539518.png",
            title: "Perfume"
        },
        {
            id: "12",
            img: "https://cdn-icons-png.flaticon.com/256/13010/13010958.png",
            title: "Sun Glasses"
        },
    ]
    return (
        <View style={styles.container}>
            <ScrollView
                style={styles.scrollView}
                horizontal
                contentContainerStyle={{ justifyContent: 'space-evenly', }}
                showsHorizontalScrollIndicator={true}
                alwaysBounceVertical={true}
                ItemSeparatorComponent={null}
            >
                <FlatList
                    data={images}
                    keyExtractor={(item) => item.id}
                    numColumns={6}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity style={{ alignItems: "center" }} onPress={() => navigation.navigate('Details', { name: item })}>
                                <View style={styles.contents} key={item.id}>
                                    <Image style={styles.img} source={{ uri: item.img }} />
                                    <Text style={styles.txt}>{item.title}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    }} />
            </ScrollView>

        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f6f6f6",
    },
    scrollView: {
        margin: 5,
        backgroundColor: "#f6f6f6",

    },
    contents: {
        flex: 1,
        padding: 10,
        backgroundColor: "#f6f6f6",
        alignItems: "center",
        margin: 5,
        elevation: 5,
        borderRadius: 5
    },
    img: {
        width: 50,
        height: 50

    },
    txt: {
        fontSize: 13,
        width: 100, // --> i made this just to make each item has the same size i guess
        textAlign: "center"
    }

})