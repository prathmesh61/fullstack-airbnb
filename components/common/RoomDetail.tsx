"use client";
import Image from "next/image";
import React from "react";
import { ExtraRoomDetails } from "./ExtraRoomDetails";
import { useFetchRoomById } from "@/hooks/useFetchRoomById";
import Spinner from "./Spinner";

type Props = {
  roomId: string;
};

export default function RoomDetail({ roomId }: Props) {
  const { isLoading, roomData } = useFetchRoomById(`/api/home/${roomId}`);
  if (isLoading) {
    return (
      <>
        <Spinner />
      </>
    );
  }

  return (
    <div className="flex flex-col w-full mt-10 gap-4 mb-5 ">
      <div>
        <h1 className="font-bold text-lg lg:text-3xl capitalize">
          {roomData?.title}
        </h1>
        <h3 className="hover:underline cursor-pointer text-md ">
          {roomData?.address}
        </h3>
      </div>
      <div className="w-full relative h-[300px]">
        <Image
          src={roomData?.image!}
          layout="fill"
          className="object-cover rounded-lg"
          alt={roomData?.title!}
        />
      </div>
      <ExtraRoomDetails data={roomData!} />
    </div>
  );
}
