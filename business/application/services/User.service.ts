import { Base } from "./Base.service";
import { IUserInterface } from "../Interfaces/IUser.interface";
import { TUserPerfilSchemaResponse, TUserTopArtistsSchemaResponse } from "@response/UserResponse";
import { useDispatch } from "react-redux";
import { setPerfilUser } from "../../../src/store/reducers/userData/userDataSlice";

export class UserService extends Base implements IUserInterface {
    private _dispatch = useDispatch();
    
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
            console.log("result", result.data);
            return result.data;
        }
        catch(error: any){
            throw null;
        };
    };

    async getTopMusicsByUser(): Promise<TUserTopArtistsSchemaResponse> {
        try{
            const result = await this._private.get<any>("me/top/tracks");
            console.log("result", result.data);
            return result.data;
        }
        catch(error: any){
            throw null;
        };
    };
};
