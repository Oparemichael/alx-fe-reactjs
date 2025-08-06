import React, { useState } from 'react';

const GitHubUserSearch = () => {
    const [username, setUsername] = useState('');
    const [userData, serUserData] = useState(null);
    const [error, setError] = useState('');

    const handleInputChange = async (e) => {
        e.preventDefault();
        setError('');
        setUserData(null);
         
        try {
            const data = await fetchUserData(username);
            setUserData(data);
        }
        catch (err) {
            setError('Looks like we cant find the user');
        }
        finally {
            setLoading(false);
        }

    };

    return (
        <div>
            < form onSubmit = {handleSubmit}>
            <input
            type="text"
            placeholder="Enter Github username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            />
            <button type="submit">Search</button>
        </form>

         {loading && <p>Loading...</p>}
         {error && <p style={{ color: 'red' }}>{error}</p>}
         {userData && (
        <div style={{ marginTop: '20px' }}>
          <img src={userData.avatar_url} alt="Avatar" width="100" />
          <h3>{userData.name || userData.login}</h3>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            View GitHub Profile
          </a>
        </div>
      )}
        </div>
    )
};

export default GitHubUserSearch;
