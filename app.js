function App() {
    const [isAuthenticated, setIsAuthenticated] = React.useState(checkSession());
    const [showIntro, setShowIntro] = React.useState(true);

    React.useEffect(() => {
        const checkAuth = () => {
            setIsAuthenticated(checkSession());
        };

        window.addEventListener('storage', checkAuth);
        const interval = setInterval(checkAuth, 60000); // Check every minute

        return () => {
            window.removeEventListener('storage', checkAuth);
            clearInterval(interval);
        };
    }, []);

    const handleLogout = () => {
        try {
            logout();
            setIsAuthenticated(false);
            setShowIntro(true);
        } catch (error) {
            reportError(error);
        }
    };

    if (!isAuthenticated) {
        return <AuthForm onLogin={() => setIsAuthenticated(true)} />;
    }

    if (showIntro) {
        return <IntroPage onContinue={() => setShowIntro(false)} />;
    }

    return <Dashboard onLogout={handleLogout} />;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div className="min-h-screen bg-gray-900">
        <App />
    </div>
);
