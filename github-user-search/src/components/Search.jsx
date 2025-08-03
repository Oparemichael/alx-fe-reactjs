import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

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
        <div className="max-w-md mx-auto p-4">
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    value={username}
                    onChange={handleInputChange}
                    placeholder="Enter GitHub username"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
                <button
                    type="submit"
                    className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                    Search
                </button>
            </form>

            {loading && <p className="mt-4 text-center">Loading...</p>}
            {error && <p className="mt-4 text-center text-red-500">{error}</p>}
            {userData && (
                <div className="mt-4 p-4 border border-gray-300 rounded-md">
                    <img src={userData.avatar_url} alt={`${userData.login}'s avatar`} className="w-24 h-24 rounded-full mx-auto" />
                    <h2 className="mt-2 text-center text-xl font-semibold">{userData.name}</h2>
                    <p className="text-center">
                        <a href={userData.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
                            View GitHub Profile
                        </a>
                    </p>
                </div>
            )}
        </div>
    );
};

export default Search;
