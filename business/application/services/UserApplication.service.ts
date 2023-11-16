import { Base } from "./Base.service";
import { IUserApplicationInterface } from "../Interfaces/IUserApplication.interface";
import { getApplicationToken } from "@utils/JwtTokenMethods";
import axios from "axios";

export class UserApplicationService extends Base implements IUserApplicationInterface {
    
    async login(): Promise<any> {
        var authOptions: any = {
            url: 'https://accounts.spotify.com/api/token',
            method: 'post',
            headers: {
                'Authorization': 'Basic ' + getApplicationToken(),
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: 'grant_type=client_credentials'
        };

        try{
            const result = await axios(authOptions);
            console.log("result", authOptions);
            
            if(result.status === 200){
                return result.data;
            };
        }
        catch(error: any){
            return error;
        };
    };
    
};
