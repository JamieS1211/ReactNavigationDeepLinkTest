import { AuthContext, IAuthContext, ILoadingAuthContext, ISignedInAuthContext, ISignedOutAuthContext } from "./authContext"

import { useContext } from "react"

function useAuth(status: "unknown"): IAuthContext
function useAuth(status: "loading"): ILoadingAuthContext
function useAuth(status: "finishedLoading"): ISignedOutAuthContext | ISignedInAuthContext
function useAuth(status: "signedOut"): ISignedOutAuthContext
function useAuth(status: "signedIn"): ISignedInAuthContext
function useAuth() {
    return useContext(AuthContext)
}

export default useAuth
