"use client";

import axios from "axios";
import { useState, useEffect } from "react";

export function useFetch(Uri: string) {
  const [data, setData] = useState<Array<HomeDataType>>();
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const fetchData = await axios(Uri);
      const res = await fetchData.data;
      setData(res);
      setLoading(false);
    } catch (error) {
      console.log(error, "Error Or fetch Data");
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return { data, loading };
}
