function ChoresHistory({ searchTerm }) {
    const history = getChoresHistory();
    
    const filteredHistory = React.useMemo(() => {
        try {
            if (!searchTerm) return history;
            
            return history.filter(entry => {
                const assignment = entry.assignment;
                const searchLower = searchTerm.toLowerCase();
                
                return Object.values(assignment).some(group =>
                    group.some(member => 
                        member.toLowerCase().includes(searchLower)
                    )
                );
            });
        } catch (error) {
            reportError(error);
            return [];
        }
    }, [history, searchTerm]);

    return (
        <div className="space-y-8" data-name="history-container">
            {filteredHistory.map((entry, index) => (
                <div key={index} className="card">
                    <h3 className="text-xl font-bold mb-4">
                        {new Date(entry.date).toLocaleDateString()}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {Object.entries(entry.assignment).map(([area, members]) => (
                            <div key={area} className="p-4 bg-gray-800 rounded">
                                <h4 className="font-semibold mb-2 capitalize">{area}</h4>
                                <ul className="list-disc list-inside">
                                    {members.map((member, i) => (
                                        <li key={i}>{member}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
