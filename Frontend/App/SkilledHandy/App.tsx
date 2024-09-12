import "./gesture-handler";
import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import HomeScreen from "./screens/Home";
import CustomerDetails from "./screens/CustomerDetailsPage";
import Login from "./screens/Login";
import OTP from "./screens/OTP";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CustomerDetails"
          component={CustomerDetails}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="OTP"
          component={OTP}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
   
  );
}
