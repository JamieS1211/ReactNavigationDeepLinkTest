import { AuthTabParamList } from "./AppNavigator"
import HomeScreen from "../screens/HomeScreen"
import React from "react"
import { ScreenProps } from "./ScreenProps"
import { createStackNavigator } from "@react-navigation/stack"

export type HomeStackParamList = {
    Home: { authStatus: "signedIn" }
}

const HomeStack = createStackNavigator<HomeStackParamList>()

const HomeNavigator: React.FC<ScreenProps<AuthTabParamList, "Home">> = (props) => (
    <HomeStack.Navigator initialRouteName="Home">
        <HomeStack.Screen name="Home" component={HomeScreen} initialParams={{ authStatus: props.route.params.authStatus }} />
    </HomeStack.Navigator>
)

export default HomeNavigator
