import { UserApplicationService } from "@service/UserApplication.service";

const userApplicationService = new UserApplicationService();

export const refreshToken = async () => {
    await userApplicationService.getAccessUserTokenByRefreshToken();
};
