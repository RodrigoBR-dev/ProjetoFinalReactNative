import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

import TabRoutes from "./Tabs.routes";
import Login from "../Screens/Login";

const Stack = createStackNavigator();

export default function StackRoutes() {
    return (
        <NavigationContainer>
            <Stack.Navigator  initialRouteName="TabRoutes" screenOptions={{headerShown: false}}>
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="TabRoutes" component={TabRoutes}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}