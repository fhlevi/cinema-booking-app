import nookies from 'nookies';

export const findToken = () => {
    const token = nookies.get().access_token;
    return token;
}

export const refreshToken = () => {
    const tokenRefresh = nookies.get().refresh_token;
    return tokenRefresh
}

export const setToken = (accessToken: string) => {
    nookies.set(null, 'access_token', accessToken, {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
    });
};

export const removeToken = () => {
    nookies.destroy(null, 'access_token')
}