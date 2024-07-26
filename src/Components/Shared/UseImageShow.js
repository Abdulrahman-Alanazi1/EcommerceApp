import { View, Text, FlatList, Image, StyleSheet } from 'react-native'
import React from 'react'
import { useWindowDimensions } from 'react-native'

export default function UseImageShow({data}) {

  const windowWidth = useWindowDimensions().width
  const windowHeight = useWindowDimensions().height

  return (
    <View>
      <FlatList
        data={data}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          return (
            <View key={item.id}>
              <Image style={styles.img} source={{ uri: item.img }}
                width={windowWidth < 500 ? 400 : '100%'}
                height={windowHeight < 600 ? 220 : 220} />
            </View>
          )
        }} />
    </View>
  )
}
const styles = StyleSheet.create({
  img: {
    borderRadius: 5,
    margin:5,
    resizeMode: 'stretch',
    elevation: 5
  }
})