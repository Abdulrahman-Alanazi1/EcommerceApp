import react from "react";
import { View, Image, FlatList, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchComponent from "../Components/Shared/SearchComponent";
import { useNavigation } from "@react-navigation/native";

export default function DetailScreen({ route }) {
    const { name } = route.params;
    
    return (
        <View >
            <SearchComponent pageName={`${name.title}`} showen={'flex'} visible={'none'}/>
        </View>
    );
}

const styles = StyleSheet.create({

})