import { Base } from "./Base.service";
import { IUserApplicationInterface } from "../Interfaces/IUserApplication.interface";
import axios from "axios";
import { getApplicationToken } from "@utils/JwtTokenMethods";
import { useNavigate } from "react-router-dom";
import { instances } from "@config/axios/axios.instances";
import { getLocalStorageProperty } from "@utils/getLocalStorageProperty";

export class UserApplicationService extends Base implements IUserApplicationInterface {
    private _navigate = useNavigate();
    
    async getAccessApplicationToken(code: string): Promise<void> {
        const client_id: string = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
        const scopes: string = "user-read-currently-playing user-read-recently-played user-read-playback-state user-top-read user-modify-playback-state user-library-read playlist-read-private playlist-read-collaborative";  
        // const redirect_uri: string = "http://localhost:5173/callback";
        const redirect_uri: string = "https://spotify-analytic.vercel.app/callback";
        const params = new URLSearchParams({
            client_id: client_id,
            response_type: "code",
            scopes: scopes,
            code: code,
            grant_type: "authorization_code",
            redirect_uri: redirect_uri
        });

        try{
            const result = await axios.post("https://accounts.spotify.com/api/token", params, {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    'Authorization': 'Basic ' + getApplicationToken(),
                },
            });

            if(result.status === 200){
                const token = result.data.access_token;
                const refreshToken = result.data.refresh_token;
                const properties: any = { token, refreshToken };
                instances.private.defaults.headers.common.Authorization = `Bearer ${token}`;
                localStorage.setItem("application", JSON.stringify(properties));
                this._navigate("/");
            };
        }
        catch(error: any){
            throw null;
        };
    };

    async getAccessUserToken(): Promise<void> {
        const client_id: string = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
        // const redirect_uri: string = "http://localhost:5173/callback";
        const redirect_uri: string = "https://spotify-analytic.vercel.app/callback";
        const state: string = this.generateRandomString(16);
        const scopes: string = "user-read-currently-playing user-read-recently-played user-read-playback-state user-top-read user-modify-playback-state user-library-read playlist-read-private playlist-read-collaborative";  
        const params = new URLSearchParams({
            client_id: client_id,
            response_type: "code",
            redirect_uri: redirect_uri,
            scope: scopes,
            state: state
        });

        document.location =" https://accounts.spotify.com/authorize?" + params.toString();
    };

    async getAccessUserTokenByRefreshToken(): Promise<void> {
        const refresh_token: string = getLocalStorageProperty("application", "refreshToken");
        const params = new URLSearchParams({
            grant_type: "refresh_token",
            refresh_token: refresh_token,
        });

        try{
            const result = await axios.post("https://accounts.spotify.com/api/token", params, {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    'Authorization': 'Basic ' + getApplicationToken(),
                },
            });

            if(result.status === 200){
                const token = result.data.access_token;
                const refreshToken = result.data.refresh_token;
                const properties: any = { token, refreshToken };
                instances.private.defaults.headers.common.Authorization = `Bearer ${token}`;
                localStorage.setItem("application", JSON.stringify(properties));
            };
        }
        catch(error: any){
            throw null;
        };
    };

    generateRandomString(length: number): string {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    };
};
