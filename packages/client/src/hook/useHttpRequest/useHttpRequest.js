import { useState } from 'react';
import axios from 'axios';

const fileRequest = (method, url) =>
  axios(url, {
    method,
    responseType: 'blob',
  });

const request = (method, url, data, headers) =>
  axios(url, {
    method,
    headers,
    data,
  });

const useHttpRequest = () => {
  const [responsetData, setResponsetData] = useState({ data: null, error: '', file: null });

  const getRequestFile = async (method, url) => {
    const reader = new FileReader();
    const response = await fileRequest(method, url);
    try {
      reader.onload = () => setResponsetData({ ...responsetData, file: reader.result });
      reader.readAsDataURL(response.data);
    } catch (err) {
      setResponsetData({ ...responsetData, error: err.massage });
    }
  };

  const httpRequest = async (method, url, data, headers) => {
    const response = await request(method, url, data, headers);
    try {
      setResponsetData({ ...responsetData, data: response.data });
    } catch (err) {
      setResponsetData({ ...responsetData, error: err.massage });
    }
  };

  return { responsetData, httpRequest, getRequestFile };
};

export default useHttpRequest;
