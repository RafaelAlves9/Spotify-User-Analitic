import { Base } from "./Base.service";
import { IUserApplicationInterface } from "../Interfaces/IUserApplication.interface";

export class UserApplicationService extends Base implements IUserApplicationInterface {
    
    async login(): Promise<boolean> {
        try{
            const result = await this._public.get(`https://viacep.com.br/ws/123/json/`);
            
            return result.data;
        }
        catch(error: any){
            return error;
        };
    };
    
};
