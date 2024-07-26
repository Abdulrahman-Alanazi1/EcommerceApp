import { View, StyleSheet, SafeAreaView, ScrollView, Text, Linking, Animated } from "react-native";
import SlideShow from "../Components/Home/SlideShow";
import PicksForYou from "../Components/Home/PicksForYou";
import Offers from "../Components/Home/Offers";
import Discounts from "../Components/Home/Discounts";
import SearchComponent from "../Components/Shared/SearchComponent";
import Ionicons from '@expo/vector-icons/Ionicons'
import React, { useRef, useState } from "react";
export default function HomeScreen() {
    const opacity = useRef(new Animated.Value(0)).current

    const heightAnim = useRef(new Animated.Value(40)).current; // Initial height
    const [lastScrollY, setLastScrollY] = useState(0);
    const maxHeight = 40; // Maximum height

    const handleScroll = (event) => {

        const currentScrollY = event.nativeEvent.contentOffset.y;
        const deltaY = lastScrollY - currentScrollY;
        setLastScrollY(currentScrollY);

        const newHeight = Math.max(0, Math.min(maxHeight, heightAnim._value + deltaY));
        Animated.timing(heightAnim, {
            toValue: newHeight,
            duration: 200, // Adjust duration as needed
            useNativeDriver: false,
        }).start();
    };
   
    return (
        <SafeAreaView style={styles.container}>
            <SearchComponent
                pageName={'Home'}
                showen={'none'}
                heightAnim={heightAnim}
                visible={'flex'}
            />
            <ScrollView
                scrollEventThrottle={100}
                contentInsetAdjustmentBehavior="automatic"
                keyboardDismissMode="on-drag"
                onScroll={handleScroll}>
                <Offers />
                <SlideShow />
                <PicksForYou />
                <Discounts />
                <View style={styles.socialView}>
                    <Text>My Socials : </Text>
                    <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-around", alignSelf: "baseline" }}>

                        <Ionicons name="logo-github" size={30} onPress={() => Linking.openURL("https://github.com/Abdulrahman-Alanazi1")} />
                        <Ionicons name="logo-twitter" size={30} onPress={() => Linking.openURL("https://x.com/novelist007")} />
                        <Ionicons name="logo-linkedin" size={30} onPress={() => Linking.openURL("https://www.linkedin.com/in/abdulrahman1alanazi")} />
                        <Ionicons name="logo-reddit" size={30} onPress={() => Linking.openURL("https://www.reddit.com/user/AboOd00/")} />

                    </View>

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    socialView: {
        margin: 11,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 11
    },
})