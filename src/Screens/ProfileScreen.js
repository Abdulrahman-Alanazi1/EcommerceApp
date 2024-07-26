import React, { useEffect, useRef } from 'react'
import { StyleSheet, View, Text, ScrollView, Animated, Dimensions, StatusBar, SafeAreaView } from 'react-native'
import ProfileHeader from '../Components/Profile/ProfileHeader'
/* 
i implemented a collapsable header -- you can create an item of list for each one
(poudcts - items - purchased)
*/
export default function ProfileScreen() {
    const scrollOffSetY = useRef(new Animated.Value(0)).current
    const Header_Max_Height = 400;
    const Header_Min_Height = 150;
    const Scroll_Distance = Header_Max_Height - Header_Min_Height


    const animatedTitleValue = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current; // this is for changeing the title from center to top-left in the profileHeader.js style name == profileName
    const animatedItemValue = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current; // this is for changing the tabbar from bottom to top in the profileHeader.js flatlist

    const isScrollingDown = useRef(false);


    const animatedHeaderHeight = scrollOffSetY.interpolate({
        inputRange: [1, Scroll_Distance],
        outputRange: [Header_Max_Height, Header_Min_Height],
        extrapolate: 'clamp',
    })

    const itemOpacity = scrollOffSetY.interpolate({
        inputRange: [1, Header_Min_Height],
        outputRange: [1, 0],
        extrapolate: 'clamp',
    });
    const startTitleAnimation = (toX, toY) => {
        Animated.timing(animatedTitleValue, {
            toValue: { x: toX, y: toY },
            duration: 100,
            useNativeDriver: false,
        }).start();
    };
    //below is for changing the tabbar from bottom to top in the profileHeader.js flatlist
    const itemNav = (toX, toY) => {
        Animated.timing(animatedItemValue, {
            toValue: { x: toX, y: toY },
            duration: 100,
            useNativeDriver: false,
            isInteraction: true
        }).start()
    }
    useEffect(() => {
        scrollOffSetY.addListener(({ value }) => {
            const scrollingDown = value > 0 && isScrollingDown.current;
            isScrollingDown.current = value > scrollOffSetY._value;

            if (scrollingDown) {
                startTitleAnimation(0, 0); // Return to original position -- for title of page which is the name of user

                // below is for changing the tabbar from bottom to top in the profileHeader.js flatlist
                itemNav(0, 0)
            } else {
                // Calculate desired x and y values based on scrollY for title of the screen == profileName in profileHeader.js
                const desiredX = value * -0.15;
                const desiredY = value * -0.17;
                startTitleAnimation(desiredX, desiredY);

                // below is for changing the tabbar from bottom to top in the profileHeader.js flatlist
                const desiredItemX = 0;
                const desiredItemY = value * -0.3;
                itemNav(desiredItemX, desiredItemY)

            }
        });

        return () => scrollOffSetY.removeAllListeners();
    }, []);

    const Screen1 = () => {
        return (
            <View style={{ alignItems: 'center', pointerEvents:'box-none', position:'relative' }}>
               <Text>Item</Text>
            </View>
        )
    }
    const Screen2 = () => {
        return (
            <View>
                <Text>item</Text>
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
             <View >
                    <ProfileHeader
                        animatedHeaderHeight={animatedHeaderHeight}
                        itemOpacity={itemOpacity}
                        animatedX={animatedTitleValue.x}
                        animatedY={animatedTitleValue.y}
                        animatedItemX={animatedItemValue.x}
                        animatedItemY={animatedItemValue.y}
                    />
                </View>
            <ScrollView
                scrollEventThrottle={5}
                showsVerticalScrollIndicator={false}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: scrollOffSetY } } }],
                    {
                        useNativeDriver: false,
                    },
                )}>

                <Screen1/>
            </ScrollView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    profileSlide1: {
        alignItems: "center",
    },
    profileSlide2: {
        justifyContent: "center",
        alignItems: "center"
    },
    profileSlide3: {
        justifyContent: "center",
        alignItems: "center"

    },

})