import { Form } from "@/components/common/Form";
import RoomPrice from "@/components/common/RoomPrice";

function AddHome() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-5 items-center justify-center">
      <div className="flex flex-col items-center ">
        <h1 className="text-xl lg:text-5xl font-bold text-gray-800 leading-t text-center">
          <span className="text-brand font-normal">Airbnb it.</span>
          <br /> You could earn
        </h1>
        <RoomPrice />
      </div>
      <Form />
    </div>
  );
}

export default AddHome;
