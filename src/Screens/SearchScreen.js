import { View, Text, StyleSheet, SafeAreaView, StatusBar, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useRef, useState } from 'react'
import SearchComponent from '../Components/Shared/SearchComponent'
import UseSimpleList from '../Components/Shared/UseSimpleList'
import { useNavigation } from '@react-navigation/native'

export default function SearchScreen() {
  const flatList1Ref = useRef(null)
  const flatList2Ref = useRef(null)

  /* this const is for handling the flat list of items scroll when the user click on UserSimpleList component items the scroll view should go
    to the same title
   */
  const ScrollToMatchingTitle = (title) => {
    const index = itemLists.findIndex((item) => item.title === title)
    if (index > -1) {
      flatList2Ref.current.scrollToIndex({ index, animatied: true })
    }
  }
  const navigation = useNavigation();
  const searchList = [
    {
      id: '1',
      title: "For You"
    },
    {
      id: '2',
      title: "Men's Wear"
    },
    {
      id: '3',
      title: "Women's Wear"
    },
    {
      id: '4',
      title: "Perfumes"
    },
    {
      id: '5',
      title: "Smart Phones"
    },
    {
      id: '6',
      title: "Electonics"
    },
    {
      id: '7',
      title: "Games"
    },
    {
      id: '8',
      title: "Beauty"
    },
    {
      id: '9',
      title: "Sun Glasses"
    },
    {
      id: '10',
      title: "Books"
    },
    {
      id: '11',
      title: "Laptops"
    },
  ]
  const itemLists = [
    {
      title: "For You",
      discountImage: 'https://i.pinimg.com/564x/d8/76/6c/d8766cb7c8629c1daf0ae8748c0012e8.jpg',
      listOfItems: [
        {
          productId: '1',
          productCompany: "Sumsung",
          productName: "Galaxy S24 Ultra, 512 GB, 12 GB Ram, 5G, Black",
          productImage: "https://daganghalal.blob.core.windows.net/41431/Product/1000x1000__samsunggalaxys22-1664952133029.png",
          productPrice: "3500SR"
        },
        {
          productId: '2',
          productCompany: "Sumsung",
          productName: "Galaxy S24 Ultra, 512 GB, 12 GB Ram, 5G, Black",
          productImage: "https://daganghalal.blob.core.windows.net/41431/Product/1000x1000__samsunggalaxys22-1664952133029.png",
          productPrice: "3500SR"
        },
        {
          productId: '3',
          productCompany: "Apple",
          productName: "Iphone 15 plus, 512 GB, 12 GB Ram, 5G, yellow",
          productImage: "https://www.jarir.com/cdn-cgi/image/fit=contain,width=auto,height=auto,quality=85,metadata=none/https://ak-asset.jarir.com/akeneo-prod/asset/9/5/c/f/95cfabf458138a6c81a50c84b8cc9b7c9410fe35_623509.jpg",
          productPrice: "3500SR"
        },
        {
          productId: '4',
          productCompany: "Sumsung",
          productName: "Galaxy S24 Ultra, 512 GB, 12 GB Ram, 5G, Black",
          productImage: "https://daganghalal.blob.core.windows.net/41431/Product/1000x1000__samsunggalaxys22-1664952133029.png",
          productPrice: "3500SR"
        },
        {
          productId: '5',
          productCompany: "Sumsung",
          productName: "Galaxy S24 Ultra, 512 GB, 12 GB Ram, 5G, Black",
          productImage: "https://daganghalal.blob.core.windows.net/41431/Product/1000x1000__samsunggalaxys22-1664952133029.png",
          productPrice: "3500SR"
        },

      ]
    },
    {
      title: "Men's Wear",
      discountImage: 'https://i.pinimg.com/564x/3a/b8/d4/3ab8d4c2461f0c85260133fabb3cfb55.jpg',
      listOfItems: [
        {
          productId: '1',
          productCompany: "Puma",
          productName: "Teamrise Tracksuit",
          productImage: "https://i.pinimg.com/564x/1b/b1/97/1bb19728109157864297f4a5bab2463c.jpg",
          productPrice: "70SR"
        },
        {
          productId: '2',
          productCompany: "Puma",
          productName: "Teamrise Tracksuit",
          productImage: "https://i.pinimg.com/564x/1b/b1/97/1bb19728109157864297f4a5bab2463c.jpg",
          productPrice: "70SR"
        },
        {
          productId: '3',
          productCompany: "Puma",
          productName: "Teamrise Tracksuit",
          productImage: "https://i.pinimg.com/564x/1b/b1/97/1bb19728109157864297f4a5bab2463c.jpg",
          productPrice: "70SR"
        },
        {
          productId: '4',
          productCompany: "Puma",
          productName: "Teamrise Tracksuit",
          productImage: "https://i.pinimg.com/564x/1b/b1/97/1bb19728109157864297f4a5bab2463c.jpg",
          productPrice: "70SR"
        },
        {
          productId: '5',
          productCompany: "Puma",
          productName: "Teamrise Tracksuit",
          productImage: "https://i.pinimg.com/564x/1b/b1/97/1bb19728109157864297f4a5bab2463c.jpg",
          productPrice: "70SR"
        },
      ]
    },
    {
      title: "Women's Wear",
      discountImage: 'https://i.pinimg.com/564x/dd/82/95/dd829506ef10cf309686a4427abf3ac3.jpg',
      listOfItems: [
        {
          productId: '1',
          productCompany: "SHEIN Slayr",
          productName: "Slayr Ladies' Cartoon Bear Pattern Short Sleeve T-Shirt",
          productImage: "https://i.pinimg.com/564x/80/c6/6c/80c66c68fffb97599d9d95a821573fda.jpg",
          productPrice: "70SR"
        },
        {
          productId: '2',
          productCompany: "Puma",
          productName: "Teamrise Tracksuit",
          productImage: "https://i.pinimg.com/564x/1b/b1/97/1bb19728109157864297f4a5bab2463c.jpg",
          productPrice: "70SR"
        },
        {
          productId: '3',
          productCompany: "Puma",
          productName: "Teamrise Tracksuit",
          productImage: "https://i.pinimg.com/564x/1b/b1/97/1bb19728109157864297f4a5bab2463c.jpg",
          productPrice: "70SR"
        },
        {
          productId: '4',
          productCompany: "Puma",
          productName: "Teamrise Tracksuit",
          productImage: "https://i.pinimg.com/564x/1b/b1/97/1bb19728109157864297f4a5bab2463c.jpg",
          productPrice: "70SR"
        },
        {
          productId: '5',
          productCompany: "Puma",
          productName: "Teamrise Tracksuit",
          productImage: "https://i.pinimg.com/564x/1b/b1/97/1bb19728109157864297f4a5bab2463c.jpg",
          productPrice: "70SR"
        },
      ]
    },
    {
      title: "Perfumes",
      discountImage: 'https://i.pinimg.com/564x/1e/43/05/1e4305d0bc2fabf27318475b9bb7812b.jpg',
      listOfItems: [
        {
          productId: '1',
          productCompany: "Sumsung",
          productName: ",,",
          productImage: "",
          productPrice: ""
        }
      ]
    },
  ]
  return (
    <SafeAreaView style={styles.container}>
      <SearchComponent pageName={'Search'} showen={'none'} />
      <View style={{ flex: 1, flexDirection: "row" }}>
        <UseSimpleList
          firstRef={flatList1Ref}
          list={searchList}
          onPress={(item) => ScrollToMatchingTitle(item)} />
        {/* 
        the flatlist bellow is for the products items
         */}
        <FlatList
          style={styles.flatList}
          ref={flatList2Ref}
          data={itemLists}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => {
            return (
              <View style={{ margin: 5 }} key={item.title}>
                <View style={{ elevation: 5 }}>
                  <Text style={{ fontSize: 16 }}>{item.title}</Text>
                  <Image style={styles.discountImage} source={{ uri: item.discountImage }} />
                </View>

                {/* --> I designed the code below because I have a database consisting of arrays and objects as you can see above,
                 just to handle the View better and make them as columns (numColumns in not great). You can summarize and simplify the process for yourself if you have your own database and adjust the design to fit your base.
                */}
                {
                  item.title === 'For You' ? (
                    <View style={styles.forYouProduct}>
                      {
                        item.listOfItems.map((listItem) => {
                          return (
                            <View style={styles.productList} key={listItem.productId}>
                              <Image style={styles.productImg} source={{ uri: listItem.productImage }} />
                              <Text style={[styles.productName, { fontWeight: "bold" }]}>{listItem.productCompany}</Text>
                              <Text ellipsizeMode='tail' numberOfLines={1} style={styles.productName}>{listItem.productName}</Text>
                              <Text style={styles.productName}>{listItem.productPrice}</Text>
                            </View>
                          )
                        })
                      }
                      <View style={{ width: '100%', alignItems: "center" }}>
                        <TouchableOpacity
                          style={styles.moreButton}
                          onPress={() => navigation.navigate('Details', { name: item })}>
                          <Text style={{ padding: 15, fontWeight:"bold" }}>More</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  ) : item.title === "Men's Wear" ? (
                    <View style={styles.forYouProduct}>
                      {
                        item.listOfItems.map((listItem) => {
                          return (
                            <View style={styles.productList} key={listItem.productId}>
                              <Image style={styles.productImg} source={{ uri: listItem.productImage }} />
                              <Text style={[styles.productName, { fontWeight: "bold" }]}>{listItem.productCompany}</Text>
                              <Text ellipsizeMode='tail' numberOfLines={1} style={styles.productName}>{listItem.productName}</Text>
                              <Text style={styles.productName}>{listItem.productPrice}</Text>
                            </View>
                          )
                        })
                      }
                      <View style={{ width: '100%', alignItems: "center" }}>
                        <TouchableOpacity
                          style={styles.moreButton}
                          onPress={() => navigation.navigate('Details', { name: item })}>
                          <Text style={{ padding: 15, fontWeight:"bold" }}>More</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  ) : item.title === "Women's Wear" ? (
                    <View style={styles.forYouProduct}>
                      {
                        item.listOfItems.map((listItem) => {
                          return (
                            <View style={styles.productList} key={listItem.productId}>
                              <Image style={styles.productImg} source={{ uri: listItem.productImage }} />
                              <Text style={[styles.productName, { fontWeight: "bold" }]}>{listItem.productCompany}</Text>
                              <Text ellipsizeMode='tail' numberOfLines={1} style={styles.productName}>{listItem.productName}</Text>
                              <Text style={styles.productName}>{listItem.productPrice}</Text>
                            </View>
                          )
                        })
                      }
                      <View style={{ width: '100%', alignItems: "center" }}>
                        <TouchableOpacity
                          style={styles.moreButton}
                          onPress={() => navigation.navigate('Details', { name: item })}>
                          <Text style={{ padding: 15, fontWeight:"bold" }}>More</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  ) : (
                    <View></View>
                  )
                }
              </View>
            )
          }} />
      </View>

    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatList: {
    flex: 1,
    margin: 5,
  },
  discountImage: {
    width: "100%",
    height: 100,
    marginTop: 5,
    marginBottom: 5,
    borderRadius: 5,
    resizeMode: 'cover',
  },
  forYouProduct: {
    flexDirection: 'row',
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 3,
  },
  productList: {
    width: "48%",
    margin: 2,
    backgroundColor: "white",
    alignItems: "center",
    elevation: 3,
    borderRadius: 5,
    borderTopWidth: 3,
    borderColor: "orange",
  },
  productImg: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    marginTop: 5
  },
  productName: {
    width: "95%",
    fontSize: 10,
    color: "black",
    textAlign: "left",
    paddingTop: 5
  },
  moreButton: {
    width: 200,
    backgroundColor: '#9bc7d6',
    paddingTop: 5,
    margin: 6,
    alignItems: "center",
    borderRadius: 5,
    opacity: 5,
    elevation: 5
  }
})