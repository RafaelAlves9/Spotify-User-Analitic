
export const setLocalProperty = (origin: string, token: string): void => {
    const tokenObject = { token };
    localStorage.setItem(origin, JSON.stringify(tokenObject));
};