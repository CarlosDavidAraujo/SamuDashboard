const { useState, useEffect } = require("react");
const { api } = require("../services/api");

export const useAxios = (endpoint, method = "get", inputs, options = {}) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await api[method](endpoint, inputs, options);
        setData(response.data);
      } catch (err) {
        setError(err);
      }

      setIsLoading(false);
    };

    fetchData();
  }, []);

  return { data, isLoading, error };
};
