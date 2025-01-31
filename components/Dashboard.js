function Dashboard({ onLogout }) {
    const [searchTerm, setSearchTerm] = React.useState('');
    const [showHistory, setShowHistory] = React.useState(false);
    const [currentAssignment, setCurrentAssignment] = React.useState(null);

    React.useEffect(() => {
        try {
            const history = getChoresHistory();
            if (history.length > 0) {
                setCurrentAssignment(history[history.length - 1].assignment);
            } else {
                const newAssignment = assignChores();
                setCurrentAssignment(newAssignment);
                saveChoresAssignment(newAssignment);
            }
        } catch (error) {
            reportError(error);
        }
    }, []);

    const renderChoreSection = (title, members) => (
        <div className="chore-card" data-name={`chore-section-${title.toLowerCase()}`}>
            <h3 className="text-xl font-bold mb-4">{title}</h3>
            <ul className="space-y-2">
                {members.map((member, index) => (
                    <li key={index}>{member}</li>
                ))}
            </ul>
        </div>
    );

    return (
        <div className="dashboard">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Chores Assignment</h2>
                <button 
                    className="btn-primary"
                    onClick={onLogout}
                    data-name="logout-button"
                >
                    Logout
                </button>
            </div>

            <SearchBar 
                value={searchTerm}
                onChange={setSearchTerm}
            />

            <button 
                className="btn-primary mb-6"
                onClick={() => setShowHistory(!showHistory)}
                data-name="toggle-history-button"
            >
                {showHistory ? 'Hide History' : 'Show History'}
            </button>

            {showHistory ? (
                <ChoresHistory searchTerm={searchTerm} />
            ) : (
                currentAssignment && (
                    <div className="chores-grid">
                        {renderChoreSection('Kitchen', currentAssignment.kitchen)}
                        {renderChoreSection('Parlor', currentAssignment.parlor)}
                        {renderChoreSection('Toilet', currentAssignment.toilet)}
                        {renderChoreSection('Yard', currentAssignment.yard)}
                        {renderChoreSection('Drums', currentAssignment.drums)}
                    </div>
                )
            )}
        </div>
    );
}
