import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/Screens/HomeScreen';
import { useFonts, Satisfy_400Regular } from '@expo-google-fonts/satisfy';
import DetailScreen from './src/Screens/DetailScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons'
import SearchScreen from './src/Screens/SearchScreen';
import ProfileScreen from './src/Screens/ProfileScreen';
import * as NavigationBar from 'expo-navigation-bar';
import { StatusBar } from 'react-native';
import CartScreen from './src/Screens/CartScreen';
const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={{
      tabBarActiveTintColor: "white",
      tabBarInactiveTintColor: "lightblue",
      tabBarInactiveBackgroundColor: '#019DFD',
      tabBarActiveBackgroundColor: '#019DFD' 
      
    }}>
      <Tab.Screen name='Home' component={StackNavigator} options={{
        headerShown: false,
        tabBarIcon: ({ color }) => <Ionicons name='home' size={24} color={color} />
      }} />
      <Tab.Screen name='Search' component={SearchScreen} options={{
        headerShown: false,
        tabBarIcon: ({ color }) => <Ionicons name='list' size={24} color={color} />,
        
      }} />
      <Tab.Screen name='Profile' component={ProfileScreen} options={{
        headerShown: false,
        tabBarIcon: ({ color }) => <Ionicons name='person' size={24} color={color} />,

      }} />
      <Tab.Screen name='Cart' component={CartScreen} options={{
        headerShown:false,
        tabBarIcon: ({ color }) => <Ionicons name='cart' size={24} color={color} />,
        tabBarBadge: 1

      }} />
    </Tab.Navigator>
  )
}
function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{
      animation: "slide_from_left"
    }}>
      <Stack.Screen name='HomeScreen' component={HomeScreen} options={{
        headerShown: false,
      }} />
      <Stack.Screen name='Details' component={DetailScreen} options={{
        headerShown: false,
        animation: "slide_from_right",
        tabBarVisible:false
      }} />
    </Stack.Navigator>
  )
}
export default function App() {
  let [fontLoaded] = useFonts({
    Satisfy_400Regular
  })
  if (!fontLoaded) {
    return null
  }
  NavigationBar.setBackgroundColorAsync('#019DFD') // this is for changing the color of navigation bar color on android for expo
  StatusBar.setBackgroundColor('#019DFD')
  return (
      <NavigationContainer style={styles.container}>
        <TabNavigator />
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
});
