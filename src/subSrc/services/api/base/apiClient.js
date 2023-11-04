// apiClient.js
import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:3010', // Your base URL
    timeout: 5000, // Request timeout in milliseconds
    headers: {
        'X-Requested-with': 'XMLHttpRequest',
    },
    withCredentials: true,
});

export default apiClient;