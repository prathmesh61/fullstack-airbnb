import Image from "next/image";
import React from "react";
import { ExtraRoomDetails } from "./ExtraRoomDetails";

type Props = {
  data: HomeDataType;
};

export default function RoomDetail({ data }: Props) {
  return (
    <div className="flex flex-col w-full mt-10 gap-4 mb-5 ">
      <div>
        <h1 className="font-bold text-lg lg:text-3xl capitalize">
          {data?.title}
        </h1>
        <h3 className="hover:underline cursor-pointer text-md ">
          {data?.address}
        </h3>
      </div>
      <div className="w-full relative h-[300px]">
        <Image
          src={data?.image}
          layout="fill"
          className="object-cover rounded-lg"
          alt={data?.title}
        />
      </div>
      <ExtraRoomDetails data={data} />
    </div>
  );
}
