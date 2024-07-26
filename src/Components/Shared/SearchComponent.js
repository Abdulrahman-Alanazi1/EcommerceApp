import { TextInput, View, Text, StatusBar, StyleSheet, Animated, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
export default function SearchComponent({ pageName, showen, heightAnim, visible }) {
  const navigation = useNavigation()
  return (
    <View style={styles.conatiner}>
      <View style={styles.pageTitleContainer}>
        <Ionicons name='arrow-back-sharp' size={24} style={{ display: `${showen}` }} color={'white'} onPress={() => navigation.goBack()} />
        <Text style={styles.pageName}>{pageName}</Text>
        <Ionicons name='heart-outline' size={24} style={{}} color={'white'} />
      </View>
      <View style={styles.searchComponent}>
        <Ionicons name='search-outline' size={24} color={'gray'} style={{ paddingHorizontal: 5, margin: 5 }} />
        <TextInput numberOfLines={1} placeholder='Search' style={styles.searchInput} />
        <Ionicons name='camera-sharp' size={24} color={'gray'} style={{ marginRight: 9, margin: 1 }} />
      </View>
      <TouchableOpacity>

        <Animated.View style={{ height: heightAnim, flexDirection: 'row', justifyContent: 'flex-start', alignItems: "center", padding: 5, overflow: "hidden", display: `${visible}` }}>
          <Ionicons name='location-sharp' size={24} color={'#144e14'} />
          <Text ellipsizeMode='tail' numberOfLines={1} style={{ width: "90%", fontSize: 15, color: 'white', margin: 3, textAlign: 'center' }}>Fake Adress, Fake Country, Fake City, Fake St, 73656</Text>
        </Animated.View>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  conatiner: {
    marginTop: StatusBar.currentHeight,
    backgroundColor: "#019DFD",
    elevation: 10,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    padding: 5,
  },
  pageTitleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center',
    padding: 5,
    textAlign: 'center'
  },
  pageName: {
    fontSize: 20,
    fontWeight: "500",
    color: 'white',
    textAlign: 'center'
  },
  searchComponent: {
    height: 50,
    backgroundColor: 'white',
    flexDirection: "row",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: 'space-between',
    elevation: 5,
    margin: 5,
  },
  searchInput: {
    flex: 1,
    textAlign: 'left',
  },
})