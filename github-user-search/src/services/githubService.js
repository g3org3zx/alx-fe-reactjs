import axios from 'axios';

   const GITHUB_API_URL = import.meta.env.VITE_APP_API_BASE_URL || 'https://api.github.com';
   const API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;

   export const fetchUserData = async (username) => {
     try {
       const headers = API_KEY ? { Authorization: `token ${API_KEY}` } : {};
       const response = await axios.get(`${GITHUB_API_URL}/users/${username}`, { headers });
       return response.data;
     } catch (error) {
       throw new Error('Looks like we cant find the user');
     }
   };
