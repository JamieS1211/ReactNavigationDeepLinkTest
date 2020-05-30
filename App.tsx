import AppNavigator from "./src/navigators/AppNavigator"
import AuthContextProvider from "./src/auth/authContext"
import React from "react"

const App = () => (
    <AuthContextProvider>
        <AppNavigator />
    </AuthContextProvider>
)

export default App
