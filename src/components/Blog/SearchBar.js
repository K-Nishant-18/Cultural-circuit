import React from 'react';

const SearchBar = ({ setSearchQuery }) => {
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div style={styles.searchBar}>
      <input
        type="text"
        placeholder="Search for blogs..."
        onChange={handleSearchChange}
        style={styles.searchInput}
      />
    </div>
  );
};

const styles = {
  searchBar: {
    marginBottom: '20px',
  },
  searchInput: {
    width: '100%',
    padding: '12px',
    fontSize: '16px',
    marginBottom: '20px',
    border: '2px solid #ddd',
    borderRadius: '8px',
    boxSizing: 'border-box',
  },
};

export default SearchBar;
