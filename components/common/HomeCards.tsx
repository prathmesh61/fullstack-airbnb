import HomeCard from "./HomeCard";

export default function HomeCards({
  data,
  searchParams,
}: {
  data: Array<HomeDataType>;
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  return (
    <div className="flex flex-wrap justify-center lg:justify-start lg:items-start gap-5 ">
      {data.map((item: HomeDataType) => (
        <HomeCard key={item._id} item={item} searchParams={searchParams} />
      ))}
    </div>
  );
}
