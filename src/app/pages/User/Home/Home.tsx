import styles from "./Home.module.css";
import { useAppSelector } from "@store/Store";
import UseHomeController from "./Home.controller";

const Home = () => {
    const { Actions } = UseHomeController();
    const { perfil } = useAppSelector((state) => state.userData);

    return(
        <h1 className={styles.styles} onClick={() => Actions.getArtists()}>
            {perfil.display_name}
        </h1>
    );
};

export default Home;