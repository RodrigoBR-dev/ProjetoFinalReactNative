import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Icons from "react-native-vector-icons/MaterialCommunityIcons";

import Home from "../Screens/Home/Home";
import Category from "../Screens/Category/Category";
import Favorite from "../Screens/Favorite/Favorite";
import MyAccount from "../Screens/Home/Home";

const Tabs = createBottomTabNavigator();

export default function routes() {
  return (
    <NavigationContainer>
      <Tabs.Navigator>
        <Tabs.Screen name="Home" component={Home}></Tabs.Screen>
        <Tabs.Screen name="Category" component={Category}></Tabs.Screen>
        <Tabs.Screen name="Favorite" component={Favorite}></Tabs.Screen>
        <Tabs.Screen name="MyAccount" component={MyAccount}></Tabs.Screen>
      </Tabs.Navigator>
    </NavigationContainer>
  );
}
