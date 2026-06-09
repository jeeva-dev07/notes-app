function SearchBar({
  search,
  setSearch,
  category,
  setCategory,
}) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search Notes..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="All">All Categories</option>
        <option value="Work">Work</option>
        <option value="Personal">Personal</option>
        <option value="Study">Study</option>
        <option value="Other">Other</option>
      </select>
    </div>
  );
}

export default SearchBar;
