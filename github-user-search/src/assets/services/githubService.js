import axios from 'axios';

/**
 * Fetches GitHub user data based on the provided username.
 * @param {string} username - GitHub username to search for.
 * @returns {Promise<Object>} - GitHub user data.
 */
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data;
  } catch (error) {
    throw new Error('User not found');
  }
};
