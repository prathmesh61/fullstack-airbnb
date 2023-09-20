"use client";
import { categories } from "@/lib/category";
import React from "react";
import { Input } from "../ui/input";

type Props = {
  setCategoriesArray: React.Dispatch<React.SetStateAction<string[]>>;
  categoriesArray: string[];
};

export default function CategoryForm({
  setCategoriesArray,
  categoriesArray,
}: Props) {
  const handleCategory = (category: CategoriesType) => {
    setCategoriesArray((prev) => {
      if (prev.includes(category.name)) {
        return prev.filter((item) => item !== category.name);
      } else {
        return [...prev, category.name];
      }
    });
  };

  return (
    <div className="flex flex-wrap items-start gap-2 whitespace-nowrap ">
      {categories.map((category) => (
        <div
          className="flex items-center gap-2 cursor-pointer"
          key={category.name}
        >
          <Input
            type="checkbox"
            value={category.name}
            onChange={() => handleCategory(category)}
            checked={categoriesArray.includes(category.name)}
          />
          <span className="text-xs ">{category.name}</span>
        </div>
      ))}
    </div>
  );
}
