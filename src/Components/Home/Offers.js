import React from 'react'
import { FlatList, View, StyleSheet, Image, Text} from 'react-native'
import { useWindowDimensions } from 'react-native'
import UseImageShow from '../Shared/UseImageShow'
export default function Offers() {
    
    const imgShow = [
        {
            id:'1',
            img: 'https://cdn.pixabay.com/photo/2022/11/22/04/34/black-friday-7608705_1280.jpg'
        },
        {
            id:'2',
            img: 'https://i.pinimg.com/564x/07/77/b7/0777b7b0e17cabaf00a5933c998d60e2.jpg'
        },
        {
            id:'3',
            img: 'https://i.pinimg.com/564x/2a/66/9b/2a669b02e707ce1bfab5e88219fd7531.jpg'
        },
    ]
    return (
        <View style={styles.Container} >
            <UseImageShow data={imgShow}/>
        </View>
    )
}
const styles = StyleSheet.create({
    Container:{
        flex:1,
        alignItems:"center",
        
    },

    img:{  
        borderRadius: 5,
        resizeMode: 'stretch',
        elevation:5
    }
})