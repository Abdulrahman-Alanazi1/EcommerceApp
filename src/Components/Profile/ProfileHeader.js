import { View, Text, StyleSheet, StatusBar, Image, TouchableOpacity, FlatList, Animated } from 'react-native'
import React from 'react'

export default function ProfileHeader({ animatedHeaderHeight, itemOpacity, animatedX, animatedY, animatedItemX, animatedItemY }) {
  const img = "https://i.pinimg.com/736x/72/c3/3b/72c33b5df086100cfcd1c29aa02020b6.jpg"
  const data = [
    {
      id: '0',
      title: 'Products'
    },
    {
      id: '1',
      title: 'Items'
    },
    {
      id: '2',
      title: 'Purchased'
    },
  ]

  return (
    <Animated.View style={[styles.conatiner, {height: animatedHeaderHeight}]}>
      <View style={styles.profileContainer}>
        <Animated.Image style={[styles.profileImg, { opacity: itemOpacity }]} source={{ uri: img }} />
        <Animated.Text style={[styles.profileName, { transform: [{ translateX: animatedX }, { translateY: animatedY }] }]}>Jerry Smith</Animated.Text>
        <Animated.Text style={[styles.profileDescription, { opacity: itemOpacity }]}>
          Hey there, folks! Jerry Smith here, just your average guy trying to make sense of this crazy universe.
          You know, life can be a real rollercoaster, especially when you're part of the Smith family.</Animated.Text>
        <Animated.View style={[styles.profilefollower, { opacity: itemOpacity }]}>
          <TouchableOpacity onPress={() => { }}>
            <Text style={styles.profilefollow}>10M follower</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.profilefollow}>1 following</Text>
          </TouchableOpacity>
        </Animated.View>

        <Animated.FlatList
          data={data}
          scrollEnabled={false}
          horizontal
          contentContainerStyle={{ width: "100%", alignItems: "center", justifyContent: 'space-evenly', }}
          style={{ borderTopWidth: 1, borderColor: "white", transform: [{ translateX: animatedItemX }, { translateY: animatedItemY }] }}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return (
              <View key={item.id} style={styles.tabItems}>
                <TouchableOpacity>

                  <Text style={{ color: 'white' }}>{item.title}</Text>
                </TouchableOpacity>
              </View>
            )
          }} />
      </View>
    </Animated.View>
  )
}
const styles = StyleSheet.create({
  conatiner: {
    marginTop:StatusBar.currentHeight,
    backgroundColor: "#019DFD",
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  profileContainer: {
    alignItems: "center",
    left:0,
    right:0
  },
  profileImg: {
    width: 150,
    height: 150,
    resizeMode: "stretch",
    borderRadius: 100,
  },
  profileName: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  profileDescription: {
    color: "white",
    textAlign: 'center'

  },
  profilefollower: {
    flexDirection: "row",
    padding: 5,
    justifyContent: "center",
    margin: 5
  },
  profilefollow: {
    marginRight: 5,
    borderWidth: 1,
    color: 'white',
    padding: 5,
    borderColor: "white",
    borderRadius:5
  },
  tabItems: {
    padding: 10,
    margin: 10,
    justifyContent: "space-between",
    alignItems: "center"

  },
})