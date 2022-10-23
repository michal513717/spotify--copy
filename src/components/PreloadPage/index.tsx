import React, { useCallback } from "react";
import { useStore } from "@/store";
import LoginPage from "./LoginPage";
import MainView from "./../main/index"

const AuthPage = () => {
    const { isLogged } = useStore();

    return(
        <>
            {isLogged ? (
                <MainView/>
            ) : (
                <LoginPage/>
            )}
        </>
    )
}

export default AuthPage;