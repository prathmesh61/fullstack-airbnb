"use client";
import React, { useState } from "react";
import axios from "axios";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { HomeTypeSchema, addHomeSchema } from "@/validation/FormValidation";
import { useSession } from "next-auth/react";
import CategoryForm from "./CategoryForm";
import { useRouter } from "next/navigation";

export function Form() {
  const { data: session } = useSession();
  const router = useRouter();
  const [image, setImage] = useState<File | undefined>();
  const [categoriesArray, setCategoriesArray] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<HomeTypeSchema>({
    resolver: zodResolver(addHomeSchema),
  });
  const CLOUDINARY_URL =
    "https://api.cloudinary.com/v1_1/dpvjdarqx/image/upload";
  const CLOUDINARY_UPLOAD_PRESET = "airbnb";
  const onSubmit = async (data: HomeTypeSchema) => {
    setLoading(true);
    const file = image;
    const formData = new FormData();
    // @ts-ignore
    formData.append("file", file);
    formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

    const { data: imageData } = await axios.post(CLOUDINARY_URL, formData);

    try {
      const course = await axios.post("/api/home", {
        ...data,
        image: imageData?.url || "",
        email: session?.user?.email,
        categories: categoriesArray,
      });
      setLoading(false);
      console.log(course);

      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      className="flex flex-col items-start gap-4 mt-5"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col items-start gap-1 w-full">
        <label className="text-sm font-bold" htmlFor="title">
          Title
        </label>
        <Input
          type="text"
          placeholder="Enter title"
          id="title"
          {...register("title")}
        />
        {errors.title && (
          <p className="text-xs italic text-red-500 mt-2">
            {errors.title?.message}
          </p>
        )}
      </div>
      <div className="flex flex-col items-start gap-1 w-full">
        <label className="text-sm font-bold" htmlFor="description">
          Description
        </label>
        <Input
          type="text"
          placeholder="Enter description"
          id="description"
          {...register("description")}
        />
        {errors.description && (
          <p className="text-xs italic text-red-500 mt-2">
            {errors.description?.message}
          </p>
        )}
      </div>
      <div className="flex flex-col items-start gap-1 w-full">
        <label className="text-sm font-bold" htmlFor="price">
          Price
        </label>
        <Input
          type="number"
          placeholder="Enter price"
          id="price"
          {...register("price")}
        />
        {errors.price && (
          <p className="text-xs italic text-red-500 mt-2">
            {errors.price?.message}
          </p>
        )}
      </div>
      <div className="flex flex-col items-start gap-1 w-full">
        <label className="text-sm font-bold" htmlFor="address">
          Address
        </label>
        <Input
          type="text"
          placeholder="Enter address"
          id="address"
          {...register("address")}
        />
        {errors.address && (
          <p className="text-xs italic text-red-500 mt-2">
            {errors.address?.message}
          </p>
        )}
      </div>
      <div className="flex items-start gap-1 w-full">
        <div className="flex flex-col items-start gap-1 w-full">
          <label className="text-sm font-bold" htmlFor="country">
            Country
          </label>
          <Input
            type="text"
            placeholder="Enter country"
            id="country"
            {...register("country")}
          />
          {errors.country && (
            <p className="text-xs italic text-red-500 mt-2">
              {errors.country?.message}
            </p>
          )}
        </div>
        <div className="flex flex-col items-start gap-1 w-full">
          <label className="text-sm font-bold" htmlFor="state">
            State
          </label>
          <Input
            type="text"
            placeholder="Enter state"
            id="state"
            {...register("state")}
          />
          {errors.state && (
            <p className="text-xs italic text-red-500 mt-2">
              {errors.state?.message}
            </p>
          )}
        </div>
      </div>
      <div className="flex items-start gap-1 w-full">
        <div className="flex flex-col items-start gap-1 w-full">
          <label className="text-sm font-bold" htmlFor="guests">
            guests
          </label>
          <Input
            type="number"
            placeholder="Enter guests"
            id="guests"
            {...register("guests")}
          />
          {errors.guests && (
            <p className="text-xs italic text-red-500 mt-2">
              {errors.guests?.message}
            </p>
          )}
        </div>
        <div className="flex flex-col items-start gap-1 w-full">
          <label className="text-sm font-bold" htmlFor="room">
            room
          </label>
          <Input placeholder="Enter room" id="room" {...register("rooms")} />
          {errors.rooms && (
            <p className="text-xs italic text-red-500 mt-2">
              {errors.rooms?.message}
            </p>
          )}
        </div>
      </div>

      <div className="flex flex-col items-start gap-1 w-full">
        <label className="text-sm font-bold" htmlFor="image">
          image
        </label>
        <Input
          type="file"
          accept="image/*"
          placeholder=" image"
          id="image"
          onChange={(e) => setImage(e.target.files?.[0])}
        />
      </div>
      <CategoryForm
        setCategoriesArray={setCategoriesArray}
        categoriesArray={categoriesArray}
      />
      <Button
        type="submit"
        disabled={loading}
        className="bg-brand text-white w-full"
      >
        {loading ? "Loading..." : "Continue"}
      </Button>
    </form>
  );
}
