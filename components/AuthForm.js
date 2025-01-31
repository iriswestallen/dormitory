function AuthForm({ onLogin }) {
    const [isLogin, setIsLogin] = React.useState(true);
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleSubmit = (e) => {
        try {
            e.preventDefault();
            if (isLogin) {
                const success = login(username, password);
                if (success) {
                    onLogin();
                } else {
                    alert('Invalid credentials');
                }
            } else {
                // Implement signup logic here
                alert('Signup functionality coming soon');
            }
        } catch (error) {
            reportError(error);
        }
    };

    return (
        <div className="auth-container">
            <form className="auth-form" onSubmit={handleSubmit}>
                <h2 className="text-2xl font-bold mb-4">
                    {isLogin ? 'Login' : 'Sign Up'}
                </h2>
                <input
                    type="text"
                    className="auth-input"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    data-name="username-input"
                />
                <input
                    type="password"
                    className="auth-input"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    data-name="password-input"
                />
                <button 
                    className="btn-primary w-full mt-4"
                    data-name="submit-button"
                >
                    {isLogin ? 'Login' : 'Sign Up'}
                </button>
                <p className="mt-4 text-center">
                    {isLogin ? "Don't have an account? " : "Already have an account? "}
                    <span 
                        className="auth-link"
                        onClick={() => setIsLogin(!isLogin)}
                        data-name="toggle-auth-mode"
                    >
                        {isLogin ? 'Sign Up' : 'Login'}
                    </span>
                </p>
            </form>
        </div>
    );
}
