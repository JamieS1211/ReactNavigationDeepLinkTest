import { Text, View } from "react-native"

import { DropInsStackParamList } from "../navigators/DropInsNavigator"
import React from "react"
import { ScreenProps } from "../navigators/ScreenProps"
import { postCategories } from "../constants"

const DropInsCategoryScreen: React.FC<ScreenProps<DropInsStackParamList, "DropInsCategory">> = (props) => {
    const category = postCategories.find((postCat) => postCat.name === props.route.params.category)

    if (category === undefined) {
        return (
            <View>
                <Text>Error</Text>
            </View>
        )
    }

    return (
        <View style={{ flex: 1, backgroundColor: "#6080E0" }}>
            <Text>{`${category.displayName} screen`}</Text>
        </View>
    )
}

export default DropInsCategoryScreen
