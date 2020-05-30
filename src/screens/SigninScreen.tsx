import { Button, View } from "react-native"

import { PreAuthStackParamList } from "../navigators/AppNavigator"
import React from "react"
import { ScreenProps } from "../navigators/ScreenProps"
import useAuth from "../auth/useAuth"

const SigninScreen: React.FC<ScreenProps<PreAuthStackParamList, "SignIn">> = (props) => {
    const { setAuthUser } = useAuth(props.route.params.authStatus)

    return (
        <View style={{ flex: 1 }}>
            <Button title="signin" onPress={() => setAuthUser("Dummy user")}>
                Sign in
            </Button>
        </View>
    )
}

export default SigninScreen
