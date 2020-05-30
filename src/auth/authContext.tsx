import React, { createContext, useState } from "react"

export interface ILoadingAuthContext {
    authUser?: undefined
    setAuthUser?: undefined
}

export interface ISignedOutAuthContext {
    authUser: undefined
    setAuthUser: React.Dispatch<React.SetStateAction<string | undefined>>
}

export interface ISignedInAuthContext {
    authUser: string
    setAuthUser: React.Dispatch<React.SetStateAction<string | undefined>>
}

export type IAuthContext = ILoadingAuthContext | ISignedOutAuthContext | ISignedInAuthContext

export const AuthContext = createContext<IAuthContext>({})

const AuthContextProvider: React.FC<{}> = ({ children }) => {
    const [authUser, setAuthUser] = useState<string>()

    return <AuthContext.Provider value={{ authUser, setAuthUser }}>{children}</AuthContext.Provider>
}

export default AuthContextProvider
