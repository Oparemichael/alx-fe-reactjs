import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';
import '../index.css';

const Search = () => {
    const [username, setUsername] = useState('');
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleInputChange = (event) => {
        setUsername(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setError(null);
        setUserData(null);

        try {
            const data = await fetchUserData(username);
            setUserData(data);
        } catch (error) {
            setError('Looks like we cant find the user');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit} className="form">
                <input
                    type="text"
                    value={username}
                    onChange={handleInputChange}
                    placeholder="Enter GitHub username"
                    className="input-field"
                />
                <button type="submit" className="submit-button">Search</button>
            </form>

            {loading && <p className="loading-message">Loading...</p>}
            {error && <p className="error-message">{error}</p>}
            {userData && (
                <div className="user-data-container">
                    <img src={userData.avatar_url} alt={`${userData.login}'s avatar`} className="user-avatar" />
                    <h2 className="user-name">{userData.name}</h2>
                    <p>
                        <a href={userData.html_url} target="_blank" rel="noopener noreferrer" className="profile-link">
                            View GitHub Profile
                        </a>
                    </p>
                </div>
            )}
        </div>
    );
};

export default Search;
 