"use client";
import { useFetch } from "@/hooks/useFetch";
import HomeCard from "./HomeCard";
import Spinner from "./Spinner";

export default function HomeCards({
  // data,
  searchParams,
}: {
  // data: Array<HomeDataType>;
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const { data, loading } = useFetch("/api/home");
  if (loading) {
    return (
      <>
        <Spinner />
      </>
    );
  }
  return (
    <div className="flex flex-wrap justify-center lg:justify-start lg:items-start gap-5 ">
      {data?.map((item: HomeDataType) => (
        <HomeCard key={item._id} item={item} searchParams={searchParams} />
      ))}
    </div>
  );
}
