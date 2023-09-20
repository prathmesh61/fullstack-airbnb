"use client";
import { roomPrice } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export default function RoomPrice() {
  const [show, setShow] = useState<boolean>(false);
  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <div className="font-bold text-4xl lg:text-6xl mt-5">
      ₹{show && roomPrice()}
      <span className="text-sm font-light">/per day</span>
    </div>
  );
}
