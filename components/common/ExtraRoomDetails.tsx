"use client";
import { UserCheck } from "lucide-react";
import { useSession } from "next-auth/react";
import React from "react";

type Props = {
  data: HomeDataType;
};

export function ExtraRoomDetails({ data }: Props) {
  const { data: session } = useSession();
  return (
    <div className="flex flex-col ">
      <div className="flex items-center justify-between gap-4 border-b-2 border-gray-200  py-2">
        <div className="flex flex-col">
          <h3 className="font-bold text-sm lg:text-xl">
            Entire home hosted by {session?.user?.name}
          </h3>
          <h3 className="font-medium text-sm lg:text-lg">
            Guests-{data?.guests} | Bedrooms - {data?.rooms}
          </h3>
        </div>
        <UserCheck
          size={35}
          className="bg-zinc-300 cursor-pointer p-1 rounded-full"
        />
      </div>
      <p className="font-medium text-xs md:text-base lg:text-lg  w-[350px] md:w-[600px]  lg:w-[900px]">
        {data?.description}
      </p>
      <div className="w-[300px] md:w-[500px] mt-5 ">
        <h2 className="font-bold text-lg lg:text-2xl ">
          What this place offers
        </h2>
        <div className="border-b-2 border-brand mb-2 mt-2" />
        <div className="grid grid-cols-2  md:grid-cols-3 grid-flow-dense gap-2">
          {data?.category.map((item) => (
            <span key={item} className="font-medium text-sm w-fit ">
              - {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
