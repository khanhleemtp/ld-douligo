const TOKEN_KEY = 'user-token';

/**
 * Manage the how Access Tokens are being stored and retreived from storage.
 *
 * Current implementation stores to localStorage. Local Storage should always be
 * accessed through this instace.
 **/

const TokenService = {
    
    getToken(token = TOKEN_KEY) {
        return localStorage.getItem(token);
    },

    saveToken(tokenValues, token = TOKEN_KEY) {
        localStorage.setItem(token, tokenValues);
    },

    removeToken(token = TOKEN_KEY) {
        localStorage.removeItem(token);
    }
}

export { TokenService }