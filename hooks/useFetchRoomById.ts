"use client";

import axios from "axios";
import { useState, useEffect } from "react";

export function useFetchRoomById(Uri: string) {
  const [roomData, setRoomData] = useState<HomeDataType>();
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const fetchData = await axios(Uri);
      const res = await fetchData.data;
      setRoomData(res);
      setIsLoading(false);
    } catch (error) {
      console.log(error, "Error Or fetch Data");
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return { roomData, isLoading };
}
