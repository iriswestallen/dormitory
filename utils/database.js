const CHORES_KEY = 'dorm_chores_history';

function saveChoresAssignment(assignment) {
    try {
        const history = getChoresHistory();
        history.push({
            date: new Date().toISOString(),
            assignment
        });
        localStorage.setItem(CHORES_KEY, JSON.stringify(history));
    } catch (error) {
        reportError(error);
    }
}

function getChoresHistory() {
    try {
        const history = localStorage.getItem(CHORES_KEY);
        return history ? JSON.parse(history) : [];
    } catch (error) {
        reportError(error);
        return [];
    }
}
