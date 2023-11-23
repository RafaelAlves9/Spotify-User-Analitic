import styles from "./Login.module.css";
import UseLoginController from "./Login.controller";
import React from "react";
import Icon from "@assets/spotify-icon.png";

const Login = () => {
    const { Actions } = UseLoginController();

    return(
        <React.Fragment>
            <div className={styles.background}>
                <form className={styles.form}>
                    <img src={Icon} alt="" />
                    <h1>Logue com sua conta Spotify e veja seus Artistar mais ouvidos!</h1>
                    <button type="button" id="login_button" onClick={() => Actions.Login()}>
                        LOGAR
                    </button>
                </form>
            </div>
        </React.Fragment>
    );
};

export default Login;