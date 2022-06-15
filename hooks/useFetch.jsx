import React, { useState } from "react";
import axios from "axios";
export const useFetch = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState();
  const [error, setError] = useState();

  const fetch = (url) => {
    setLoading(true);
    axios
      .get(url)
      .then((res) => {
        setData(res.data);
      })
      .catch((e) => setError(e))
      .finally(() => setLoading(false));
  };

  const res = { data, loading, error };

  return [res, fetch];
};
