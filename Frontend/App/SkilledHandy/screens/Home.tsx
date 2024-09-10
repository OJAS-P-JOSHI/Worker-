import { StatusBar } from "expo-status-bar";
import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";


const HomeScreen = () => {
    const navigation = useNavigation();
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.container}>
                <TouchableOpacity onPress={() => {navigation.navigate("CustomerDetails")}}>
                <Text>Home Screen</Text>
                </TouchableOpacity>                             
            </View>           
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default HomeScreen;