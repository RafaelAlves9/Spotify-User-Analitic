export interface IUserApplicationInterface {
    getAccessApplicationToken(code: string): Promise<void>;
    getAccessUserToken(): Promise<void>;
};
