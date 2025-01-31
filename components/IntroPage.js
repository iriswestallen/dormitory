function IntroPage({ onContinue }) {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-2xl mx-auto text-center" data-name="intro-content">
                <h1 className="text-4xl font-bold mb-6">
                    Welcome to Dormitory Chores Manager
                </h1>
                <p className="text-xl mb-8">
                    This system helps organize and distribute chores among dormitory members,
                    ensuring a fair and efficient division of responsibilities.
                </p>
                <div className="space-y-4 text-left mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Features:</h2>
                    <ul className="list-disc list-inside space-y-2">
                        <li>Automatic chores assignment every 2 weeks</li>
                        <li>Historical record of previous assignments</li>
                        <li>Easy search functionality</li>
                        <li>Fair distribution among all members</li>
                    </ul>
                </div>
                <button 
                    className="btn-primary text-xl"
                    onClick={onContinue}
                    data-name="continue-button"
                >
                    Continue to Dashboard
                </button>
            </div>
        </div>
    );
}
