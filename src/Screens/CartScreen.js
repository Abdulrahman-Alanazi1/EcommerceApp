import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import SearchComponent from '../Components/Shared/SearchComponent'

export default function CartScreen() {
  return (
    <View>
        <SearchComponent pageName={'My Cart'} visible={'none'}/>
    </View>
  )
}