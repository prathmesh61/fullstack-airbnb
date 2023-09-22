import HomeCard from "./HomeCard";

export default function HomeCards({ data }: { data: Array<HomeDataType> }) {
  return (
    <div className="flex flex-wrap justify-center lg:justify-start lg:items-start gap-5">
      {data.map((item: HomeDataType) => (
        <HomeCard key={item._id} item={item} />
      ))}
    </div>
  );
}
