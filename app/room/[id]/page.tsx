import RoomDetail from "@/components/common/RoomDetail";

type ParamsType = {
  params: { id: string };
};
async function getData(URL: string) {
  const res = await fetch(URL);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
export default async function page({ params }: ParamsType) {
  const { id } = params;
  const data: HomeDataType = await getData(
    process.env.NEXT_PUBLIC_URL! + `/api/home/${id}`
  );

  return (
    <div className="p-4 ">
      <RoomDetail data={data} />
    </div>
  );
}
