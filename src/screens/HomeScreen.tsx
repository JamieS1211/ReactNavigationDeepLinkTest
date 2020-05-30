import { Text, View } from "react-native"

import { HomeStackParamList } from "../navigators/HomeNavigator"
import React from "react"
import { ScreenProps } from "../navigators/ScreenProps"
import useAuth from "../auth/useAuth"

const HomeScreen: React.FC<ScreenProps<HomeStackParamList, "Home">> = (props) => {
    const { authUser } = useAuth(props.route.params.authStatus)

    return (
        <View style={{ flex: 1 }}>
            <Text>{`Hello ${authUser}`}</Text>
        </View>
    )
}

export default HomeScreen
