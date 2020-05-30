import { AuthTabParamList } from "./AppNavigator"
import DropInsCategoryScreen from "../screens/DropInsCategoryScreen"
import DropInsScreen from "../screens/DropInsScreen"
import React from "react"
import { ScreenProps } from "./ScreenProps"
import { createStackNavigator } from "@react-navigation/stack"
import { postCategoryName } from "../constants"

export type DropInsStackParamList = {
    DropIns: {
        authStatus: "signedIn"
    }
    DropInsCategory: {
        authStatus: "signedIn"
        category: postCategoryName
    }
}

const DropInsStack = createStackNavigator<DropInsStackParamList>()

const PostNavigator: React.FC<ScreenProps<AuthTabParamList, "DropIns">> = (props) => (
    <DropInsStack.Navigator initialRouteName="DropIns">
        <DropInsStack.Screen name="DropIns" component={DropInsScreen} initialParams={{ authStatus: props.route.params.authStatus }} />
        <DropInsStack.Screen name="DropInsCategory" component={DropInsCategoryScreen} initialParams={{ authStatus: props.route.params.authStatus }} />
    </DropInsStack.Navigator>
)

export default PostNavigator
