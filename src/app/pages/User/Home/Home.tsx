import styles from "./Home.module.css";
import { useAppSelector } from "@store/Store";
import UseHomeController from "./Home.controller";
import React from "react";

const Home = () => {
    const { } = UseHomeController();
    const { perfil, artists } = useAppSelector((state) => state.userData);

    return(
        <React.Fragment>
            <h1 className={styles.styles}>
                {perfil.display_name}
            </h1>
            {!!artists.items.length && artists.items.map((artist, index) => 
                <div key={index}>
                    {artist.name}
                </div>
            )}
            
        </React.Fragment>
    );
};

export default Home;
