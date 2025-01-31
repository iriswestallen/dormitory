function login(username, password) {
    try {
        if (username === 'dormcap' && password === 'boys') {
            const session = {
                username,
                loginTime: new Date().getTime(),
                expiryTime: new Date().getTime() + 10 * 60 * 1000 // 10 minutes
            };
            localStorage.setItem('session', JSON.stringify(session));
            return true;
        }
        return false;
    } catch (error) {
        reportError(error);
        return false;
    }
}

function checkSession() {
    try {
        const session = JSON.parse(localStorage.getItem('session'));
        if (!session) return false;
        
        const currentTime = new Date().getTime();
        if (currentTime > session.expiryTime) {
            localStorage.removeItem('session');
            return false;
        }
        return true;
    } catch (error) {
        reportError(error);
        return false;
    }
}

function logout() {
    try {
        localStorage.removeItem('session');
    } catch (error) {
        reportError(error);
    }
}
