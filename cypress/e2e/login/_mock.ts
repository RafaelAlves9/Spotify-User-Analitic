const clientLoginSucess = {
    email: 'rafael@gmail.com',
    password: '123456'
};
const clientLoginError = {
    email: 'teste@gmail.com',
    password: '123456'
};
const clientInputInvalid = {
    email: 'rafael',
    password: 'dsasd'
};
const credentialToLoginSucess = {
    redirect_uri: "/callback",
    code: "abc",
    token: "abc"
};

export const mock = {
    clientLoginSucess,
    clientLoginError,
    clientInputInvalid,
    credentialToLoginSucess
};