import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import TabRoutes from "./Tabs.routes";
import Login from "../Screens/Login";
import Signup from "../Screens/Signup";
import ProductDetails from "../Screens/ProductDetails";
import Address from "../Screens/Address";
import Cart from "../Screens/Cart";

const Stack = createStackNavigator();

export default function StackRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="TabRoutes"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="ProductDetails" component={ProductDetails} />
        <Stack.Screen name="TabRoutes" component={TabRoutes} />
        <Stack.Screen name="Address" component={Address}/>
        <Stack.Screen name="Cart" component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
