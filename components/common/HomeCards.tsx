import HomeCard from "./HomeCard";
export default function HomeCards({ data }: { data: Array<HomeDataType> }) {
  return (
    <div className="flex flex-wrap items-start gap-5">
      {data.map((item: HomeDataType) => (
        <HomeCard key={item._id} item={item} />
      ))}
    </div>
  );
}
