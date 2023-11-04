import { useEffect, useState } from 'react';
import { useCookies, Cookies } from "react-cookie";
import apiClient from './apiClient';

const useQuery = (endpoint, method = 'GET', requestData = null) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const cookies = new Cookies();
  const accessToken = cookies.get('userToken')

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        let response;

        if (method === 'GET') {
          response = await apiClient.get(endpoint, {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          });
        } else if (method === 'POST') {
          response = await apiClient.post(endpoint, requestData);
        }

        setData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint, method, requestData]);

  return { data, loading, error };
};

export default useQuery;
