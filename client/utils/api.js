const BASE_URL =
  import.meta.env.VITE_API_URL ||
  (import.meta.env.DEV ? "http://localhost:3000" : "http://backend:3000");

export const apiFetch = (endpoint, options = {}) => {
  return fetch(`${BASE_URL}${endpoint}`, {
    credentials: 'include',
    ...options,
  });
};
