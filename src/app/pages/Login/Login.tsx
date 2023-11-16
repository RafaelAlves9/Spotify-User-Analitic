import { UserApplicationService } from "@service/UserApplication.service";
import styles from "./Login.module.css";

const Login = () => {
    const userApplicationService = new UserApplicationService();

    const Login = async () => {
        const result: any = await userApplicationService.login();
        console.log("result view", result);
    };

    return(
        <h1 className={styles.styles} onClick={() => Login()}>
            Login
        </h1>
    );
};

export default Login;