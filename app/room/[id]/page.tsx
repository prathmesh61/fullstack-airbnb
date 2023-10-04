import RoomDetail from "@/components/common/RoomDetail";

type ParamsType = {
  params: { id: string };
};
export default async function page({ params }: ParamsType) {
  const { id } = params;

  return (
    <div className="p-4 border-b-2 border-gray-200">
      <RoomDetail roomId={id} />
    </div>
  );
}
