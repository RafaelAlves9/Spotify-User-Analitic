import { TUserPerfilSchemaResponse, TUserTopArtistsSchemaResponse } from "@response/UserResponse";

export interface IUserInterface {
    getPerfilUser(): Promise<TUserPerfilSchemaResponse>;
    getTopArtistsByUser(): Promise<TUserTopArtistsSchemaResponse>;
    getTopMusicsByUser(): Promise<TUserTopArtistsSchemaResponse>;
};
