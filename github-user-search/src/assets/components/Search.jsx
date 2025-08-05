import React, { useState } from 'react';

const GitHubUserSearch = () => {
    const [username, setUsername] = useState('');
    const [userData, serUserData] = useState(null);
    const [error, setError] = useState('');

    const handleInputChange = async (e) => {
        e.preventDefault();
        setError('');
        setUserData(null);

    }
}