import { Base } from "./Base.service";
import { IUserInterface } from "../Interfaces/IUser.interface";
import { TUserPerfilSchemaResponse, TUserTopArtistsSchemaResponse } from "@response/UserResponse";
import { useDispatch } from "react-redux";
import { setArtistsUser, setMusicsUser, setPerfilUser } from "../../../src/store/reducers/userData/userDataSlice";
import { UserApplicationService } from "./UserApplication.service";

export class UserService extends Base implements IUserInterface {
    private _dispatch = useDispatch();
    private _userApplicationService = new UserApplicationService();
    
    async getPerfilUser(): Promise<TUserPerfilSchemaResponse> {
        try{
            const result = await this._private.get<TUserPerfilSchemaResponse>("me");
            this._dispatch(setPerfilUser(result.data));
            return result.data;
        }
        catch(error: any){
            throw error;
        };
    };

    async getTopArtistsByUser(): Promise<TUserTopArtistsSchemaResponse> {
        try{
            const result = await this._private.get<any>("me/top/artists");
            this._dispatch(setArtistsUser(result.data));
            this._userApplicationService.getAccessUserTokenByRefreshToken();
            return result.data;
        }
        catch(error: any){
            throw null;
        };
    };

    async getTopMusicsByUser(): Promise<TUserTopArtistsSchemaResponse> {
        try{
            const result = await this._private.get<any>("me/top/tracks");
            this._dispatch(setMusicsUser(result.data));
            return result.data;
        }
        catch(error: any){
            throw null;
        };
    };
};
