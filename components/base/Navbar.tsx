import Loggin from "@/components/common/Loggin";

import { Globe, Search } from "lucide-react";
import Link from "next/link";
export default function Navbar() {
  return (
    <div className="flex justify-between items-center p-5 border-b-2 border-gray-100">
      <Link
        href={"/?category=all"}
        className="text-lg font-extrabold bg-brand px-2 text-white"
      >
        Airbnb.
      </Link>
      <div className="w-fit hidden md:flex px-4 py-2 space-x-2 rounded-full border-2 text-black border-gray-300  items-center text-sm">
        <span>Anywhere |</span>
        <span>Any week |</span>
        <span className="bg-brand rounded-full p-1 cursor-pointer text-white">
          <Search size={15} />
        </span>
      </div>

      <div className="flex items-center space-x-2 ">
        <Link
          href={"/add-home"}
          className="text-sm text-black cursor-pointer hidden md:flex"
        >
          Airbnb your home
        </Link>
        <Globe size={20} className="cursor-pointer hidden md:flex" />
        <Loggin />
      </div>
    </div>
  );
}
