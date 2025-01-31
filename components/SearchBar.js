function SearchBar({ value, onChange }) {
    return (
        <input
            type="text"
            className="search-bar"
            placeholder="Search members..."
            value={value}
            onChange={(e) => onChange(e.target.value)}
            data-name="search-input"
        />
    );
}
