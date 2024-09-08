import { StatusBar } from "expo-status-bar";
import { ScrollView, View, Text, StyleSheet } from "react-native";

const HomeScreen = () => {

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.container}>
                <Text>Home Screen</Text>
                <Text>Home Screen</Text>
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