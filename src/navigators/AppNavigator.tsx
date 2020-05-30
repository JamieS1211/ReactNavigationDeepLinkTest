import * as Linking from "expo-linking"

import { LinkingOptions, NavigationContainer } from "@react-navigation/native"

import DropInsNavigator from "./DropInsNavigator"
import HomeNavigator from "./HomeNavigator"
import React from "react"
import SigninScreen from "../screens/SigninScreen"
import { Text } from "react-native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createStackNavigator } from "@react-navigation/stack"
import useAuth from "../auth/useAuth"

export type PreAuthStackParamList = {
    SignIn: { authStatus: "signedOut" }
}

export type AuthTabParamList = {
    Home: { authStatus: "signedIn" }
    DropIns: { authStatus: "signedIn" }
}

const PreAuthStack = createStackNavigator<PreAuthStackParamList>()
const AuthTab = createBottomTabNavigator<AuthTabParamList>()

const AppNavigator: React.FC<{}> = () => {
    const { authUser } = useAuth("finishedLoading")

    const linking: LinkingOptions = {
        prefixes: [Linking.makeUrl("/"), "https://www.testapp.com"],
        config: {
            DropIns: {
                screens: {
                    DropInsCategory: {
                        path: "DropInsCategory/:category"
                    }
                }
            }
        }
    }

    return (
        <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
            {authUser === undefined ? (
                <PreAuthStack.Navigator initialRouteName="SignIn">
                    <PreAuthStack.Screen name="SignIn" component={SigninScreen} initialParams={{ authStatus: "signedOut" }} />
                </PreAuthStack.Navigator>
            ) : (
                <AuthTab.Navigator initialRouteName="Home">
                    <AuthTab.Screen name="Home" component={HomeNavigator} initialParams={{ authStatus: "signedIn" }} />
                    <AuthTab.Screen name="DropIns" component={DropInsNavigator} initialParams={{ authStatus: "signedIn" }} />
                </AuthTab.Navigator>
            )}
        </NavigationContainer>
    )
}

export default AppNavigator
