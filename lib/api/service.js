const URL = 'http://localhost:3001';

const defaultOptions = {
  url: '',
  method: 'GET',
  body: null,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
};

export const apiService = async options => {
  const { method, endpoint, headers, body } = {
    ...defaultOptions,
    ...options,
    headers: { ...defaultOptions.headers, ...options.headers },
  };
  try {
    const response = await fetch(`${URL}/${endpoint}`, {
      method,
      headers: method !== 'DELETE' ? headers : {},
      body: body ? JSON.stringify(body) : undefined,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    throw new Error(`Error: ${error}`);
  }
};

apiService.get = endpoint => {
  return apiService({ endpoint });
};
apiService.post = (endpoint, body) => {
  return apiService({ method: 'POST', body, endpoint });
};
apiService.put = (endpoint, body) => {
  return apiService({ method: 'PUT', body, endpoint });
};
apiService.delete = endpoint => {
  return apiService({ method: 'DELETE', endpoint });
};
