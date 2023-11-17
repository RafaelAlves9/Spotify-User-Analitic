import { UserService } from "@service/User.service";
import { useEffect } from "react";

const UseHomeController = () => {
    const userService = new UserService();

    useEffect(() => {
        userService.getPerfilUser();
    }, []);

    const getTopMusics = async () => {
        const result = await userService.getTopMusicsByUser();
    };

    const getArtists = async () => {
        const result = await userService.getTopArtistsByUser();
    };
    
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

export default UseHomeController;
