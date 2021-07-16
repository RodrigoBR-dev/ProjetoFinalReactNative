import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {
  MaterialCommunityIcons,
  Feather,
  MaterialIcons,
} from "react-native-vector-icons";

import Home from "../Screens/Home";
import Category from "../Screens/Category";
import Favorite from "../Screens/Favorite";
import MyAccount from "../Screens/MyAccount";
// import Header from "../components/Header"; //tirado da rota para não repetir no myAccount


const Tabs = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <>
      <Tabs.Navigator
        initialRouteName="Home"
        tabBarOptions={{
          showLabel: false,
          activeTintColor: "#F0C818",
        }}
      >
        <Tabs.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={35} />
            ),
          }}
        />
        <Tabs.Screen
          name="Category"
          component={Category}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Feather name="list" color={color} size={35} />
            ),
          }}
        />
        <Tabs.Screen
          name="Favorite"
          component={Favorite}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="favorite" color={color} size={35} />
            ),
          }}
        />
        <Tabs.Screen
          name="MyAccount"
          component={MyAccount}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="account-circle"
                color={color}
                size={35}
              />
            ),
          }}
        />
      </Tabs.Navigator>
    </>
  );
}