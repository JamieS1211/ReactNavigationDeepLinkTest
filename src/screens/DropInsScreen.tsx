import { Button, Text, View } from "react-native"

import { DropInsStackParamList } from "../navigators/DropInsNavigator"
import React from "react"
import { ScreenProps } from "../navigators/ScreenProps"
import { postCategories } from "../constants"

const DropInsScreen: React.FC<ScreenProps<DropInsStackParamList, "DropIns">> = (props) => (
    <View style={{ flex: 1 }}>
        <Text>Drop Ins</Text>
        {postCategories.map((postCat, index) => (
            <View key={index} style={{ margin: 10 }}>
                <Button
                    title={postCat.displayName}
                    onPress={() => props.navigation.navigate("DropInsCategory", { authStatus: props.route.params.authStatus, category: postCat.name })}
                />
            </View>
        ))}
    </View>
)

export default DropInsScreen
