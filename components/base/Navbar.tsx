import Image from "next/image";
import Loggin from "@/components/common/Loggin";
import logo from "@/public/logo.png";

import { Globe2, Globe, Search } from "lucide-react";
import Link from "next/link";
export default function Navbar() {
  return (
    <div className="flex justify-between items-center p-5 border-b-2 border-gray-100">
      <Link href={"/"}>
        <Image
          src={logo}
          width={70}
          height={70}
          alt={"logo airbnb"}
          className="cursor-pointer hidden md:flex"
        />
      </Link>
      <div className="w-fit px-4 py-2 space-x-2 rounded-full border-2 text-black border-gray-300 flex items-center text-sm">
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
