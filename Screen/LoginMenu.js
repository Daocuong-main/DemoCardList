import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CreateAccount from "./CreateAccount";
import LoginTemplate from "./LoginTemplate";
import WelcomeBack from "./WelcomeBack"

const Stack = createNativeStackNavigator();

export default function LoginMenu() {
    return (
        <NavigationContainer>        
            <Stack.Navigator screenOptions={{headerTitle: "", headerTransparent: true}}>
                <Stack.Screen name="LoginTemplate" component={LoginTemplate} />
                <Stack.Screen name="CreateAccount" component={CreateAccount} />
                <Stack.Screen name="WelcomeBack" component={WelcomeBack} />
            </Stack.Navigator>
        </NavigationContainer>

    )
};
