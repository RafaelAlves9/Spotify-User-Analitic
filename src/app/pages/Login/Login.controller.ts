import { UserApplicationService } from "@service/UserApplication.service";
import { useEffect } from "react";

const UseLoginController = () => {
    const userApplicationService = new UserApplicationService();
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");
    // const token = getLocalStorageProperty("application", "token");

    const Login = async () => {
        await userApplicationService.getAccessUserToken();
    };

    const settingUserAuthenticationToken = async (code: string) => {
        await userApplicationService.getAccessApplicationToken(code);
    };

    useEffect(() => {
        console.log("url", code);
        if(code === null) return;
        settingUserAuthenticationToken(code);
    }, [code]);

    return {
        Actions: {
            Login: Login
        },
        States: {
            
        },
        Setters: {
            
        },
    };
};

export default UseLoginController;
