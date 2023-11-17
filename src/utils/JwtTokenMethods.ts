export const getApplicationToken = (): string => {
    const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
    const clientSecret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;
    
    return btoa(clientId + ':' + clientSecret);
};
