import { useState, useEffect } from 'react';
import axios from 'axios';
import { RAPID_API_KEY, RAPID_API_HOST } from '@env';

export const rapidApiKey = process.env.RAPID_API_KEY;
export const rapidApiHost = process.env.RAPID_API_HOST;

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: 'GET',
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    params: {
      ...query,
      // query: 'Python developer in Texas, USA',
      // page: '1',
      // num_pages: '1',
    },
    headers: {
      'X-RapidAPI-Key': rapidApiKey,
      'X-RapidAPI-Host': rapidApiHost,
    },
  };

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.request(options);
      setData(response.data.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      console.log(error);
      alert('There is an error');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    fetchData();
  };

  return {
    data,
    isLoading,
    error,
    refetch,
  };
};

export default useFetch;
