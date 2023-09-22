"use client";
import { categories } from "@/lib/category";
import Image from "next/image";
import { useRouter } from "next/navigation";

function CategoryNavbar() {
  const router = useRouter();

  const addCategoryToUrl = (category: CategoriesType) => {
    const fullURL = new URL(window.location.href);
    fullURL.searchParams.set("category", category.name);
    router.replace(`/${fullURL.search}`);
  };
  return (
    <div className="p-4 flex w-full lg:justify-center items-center space-x-6 overflow-x-scroll lg:overflow-x-hidden whitespace-nowrap border-b-2 border-gray-100">
      {categories.map((category) => (
        <div
          className="flex flex-col items-center cursor-pointer"
          key={category.name}
          onClick={() => addCategoryToUrl(category)}
        >
          <Image
            width={15}
            height={15}
            src={category.icon}
            alt={category.name}
          />
          <span className="text-xs">{category.name}</span>
        </div>
      ))}
    </div>
  );
}

export default CategoryNavbar;
