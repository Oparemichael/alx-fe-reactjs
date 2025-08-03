import React, { useState } from 'react';

const Search = ({ onSearch }) => {
    const [username, setUsername] = useState('');

    const handleInputChange = (event) => {
        setUsername(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (username.trim()) {
            onSearch(username);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={username}
                onChange={handleInputChange}
                placeholder="Enter GitHub username"
            />
            <button type="submit">Search</button>
        </form>
    );
};

export default Search;
 