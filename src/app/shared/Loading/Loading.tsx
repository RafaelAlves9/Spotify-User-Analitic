import React from "react";
import styles from "./Loading.module.css";
import { useAppSelector } from "@store/store";
import LoadingGif from "@assets/loading.gif";

type props = {
    isLoadingParam?: boolean;
};

const Loading = ({ isLoadingParam = false }: props) => {
    const { isLoading } = useAppSelector((state) => state.loading);

    return(
        <React.Fragment>
            {(isLoading || isLoadingParam) && (
                <div className={styles.bg_loading}>
                    <img src={LoadingGif} alt="" />
                </div>
            )}
        </React.Fragment>
    );
};

export default Loading;