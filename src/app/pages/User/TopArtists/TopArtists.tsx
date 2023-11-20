import styles from "./TopArtists.module.css";
import { useAppSelector } from "@store/Store";
import UseTopArtistsController from "./TopArtists.controller";

const TopArtists = () => {
    const { } = UseTopArtistsController();
    const { perfil, artists } = useAppSelector((state) => state.userData);

    return(
        <div className={styles.background}>
            <div className={styles.card}>
                <h1 className={styles.styles}>
                    Artistas mais ouvidos de {perfil.display_name}
                </h1>
                <div className={styles.content}>
                    {!!artists.items.length && artists.items.map((artist, index) => 
                        <div key={index}>
                            <div>
                                <img src={artist.images[0].url} alt="" />
                            </div>
                            <p>{index + 1}º {artist.name}</p>
                        </div>
                    )}
                </div>
                <button className={styles.navigate_button}>
                    Músicas mais ouvidas
                </button>
            </div>
        </div>
    );
};

export default TopArtists;
