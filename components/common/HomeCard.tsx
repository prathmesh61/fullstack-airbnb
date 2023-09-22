"use client";
import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Spinner from "./Spinner";

type Props = {
  item: HomeDataType;
};

export default function HomeCard({ item }: Props) {
  const search = useSearchParams();
  let searchParams = search.get("category");

  // Check if searchParams is set and item's category array contains searchParams
  if (searchParams && item.category.includes(searchParams)) {
    return (
      <Suspense fallback={<Spinner />}>
        <Link
          href={`/room/${item._id}?state=${item.country}&city=${item.state}`}
          className="flex flex-col items-start  p-2"
        >
          <div className="w-full">
            <Image
              src={item?.image}
              alt={item.title}
              width={290}
              height={160}
              className="rounded-lg object-cover max-h-[160px]"
            />
          </div>
          <div className="flex flex-col gap-1 mt-2">
            <h3 className="text-sm font-bold">{item.address}</h3>
            <h3 className="text-xs font-light">{item.title}</h3>
            <h3 className="text-lg font-bold">
              ₹{item.price} <span className="text-sm font-light">/night</span>
            </h3>
          </div>
        </Link>
      </Suspense>
    );
  } else if (
    searchParams === "all" ||
    searchParams === process.env.NEXT_PUBLIC_URL ||
    searchParams === null
  ) {
    // Check if searchParams include in category if not then display all item

    return (
      <Suspense fallback={<Spinner />}>
        <Link
          href={`/room/${item._id}?state=${item.country}&city=${item.state}`}
          className="flex flex-col items-start  p-2"
        >
          <div className="w-full">
            <Image
              src={item?.image}
              alt={item.title}
              width={290}
              height={160}
              className="rounded-lg object-cover max-h-[160px]"
            />
          </div>
          <div className="flex flex-col gap-1 mt-2">
            <h3 className="text-sm font-bold">{item.address}</h3>
            <h3 className="text-xs font-light">{item.title}</h3>
            <h3 className="text-lg font-bold">
              ₹{item.price} <span className="text-sm font-light">/night</span>
            </h3>
          </div>
        </Link>
      </Suspense>
    );
  }
}
