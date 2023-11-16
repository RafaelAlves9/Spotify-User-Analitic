export const getApplicationToken = (): string => {
    const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
    const clientSecret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;
    console.log("clientId",clientId)
    console.log("clientSecret",clientSecret)
    return btoa(clientId + ':' + clientSecret);
};
