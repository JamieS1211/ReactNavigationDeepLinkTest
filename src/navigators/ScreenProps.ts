import { ParamListBase, RouteProp } from "@react-navigation/native"

import { StackNavigationProp } from "@react-navigation/stack"

export type ScreenProps<T extends ParamListBase, K extends keyof T> = {
    navigation: StackNavigationProp<T, K>
    route: RouteProp<T, K>
}
