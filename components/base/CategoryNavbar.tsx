import { categories } from "@/lib/category";
import Image from "next/image";
import Link from "next/link";

function CategoryNavbar() {
  return (
    <div className="p-4 flex w-full lg:justify-center items-center space-x-6 overflow-x-scroll lg:overflow-x-hidden whitespace-nowrap border-b-2 border-gray-100">
      {categories.map((category) => (
        <Link
          href={`?category=${category.name}`}
          className="flex flex-col items-center cursor-pointer"
          key={category.name}
        >
          <Image
            width={15}
            height={15}
            src={category.icon}
            alt={category.name}
          />
          <span className="text-xs">{category.name}</span>
        </Link>
      ))}
    </div>
  );
}

export default CategoryNavbar;
