import { UserService } from "@service/User.service";
import { useAppSelector } from "@store/store";
import { useEffect } from "react";

const UseTopArtistsController = () => {
    const userService = new UserService();
    const {  } = useAppSelector((state) => state.userData);

    // const getTopMusics = async () => {
    //     await userService.getTopMusicsByUser();
    // };

    const getArtists = async () => {
        await userService.getTopArtistsByUser();
    };

    const initialLoading = async () => {
        await userService.getPerfilUser();
        await userService.getTopArtistsByUser();
    };

    useEffect(() => {
        initialLoading();
    }, []);
    
    return {
        Actions: {
            getArtists: getArtists,
        },
        States: {
            
        },
        Setters: {
            
        },
    };
};

export default UseTopArtistsController;
