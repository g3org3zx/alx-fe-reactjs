import axios from 'axios';

const GITHUB_API_URL = import.meta.env.VITE_APP_API_BASE_URL || 'https://api.github.com';
const API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;

export const searchUsers = async ({ query, location, minRepos, page = 1 }) => {
  try {
    let searchQuery = query ? query : '';
    if (location) searchQuery += `+location:${location}`;
    if (minRepos) searchQuery += `+repos:>=${minRepos}`;
    
    const headers = API_KEY ? { Authorization: `token ${API_KEY}` } : {};
    const response = await axios.get(`https://api.github.com/search/users?q=${encodeURIComponent(searchQuery)}&page=${page}&per_page=30`, { headers });
    return response.data;
  } catch (error) {
    throw new Error('Looks like we cant find any users');
  }
};

export const fetchUserData = async (username) => {
  try {
    const headers = API_KEY ? { Authorization: `token ${API_KEY}` } : {};
    const response = await axios.get(`${GITHUB_API_URL}/users/${username}`, { headers });
    return response.data;
  } catch (error) {
    throw new Error('Looks like we cant find the user');
  }
};
