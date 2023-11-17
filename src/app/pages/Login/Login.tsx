import styles from "./Login.module.css";
import UseLoginController from "./Login.controller";

const Login = () => {
    const { Actions } = UseLoginController();

    return(
        <h1 className={styles.styles} onClick={() => Actions.Login()}>
            Login
        </h1>
    );
};

export default Login;