"use client";
import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { HomeTypeSchema, addHomeSchema } from "@/validation/FormValidation";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export const useAddNewHome = () => {
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
      router.refresh();
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return {
    register,
    handleSubmit,
    onSubmit,
    errors,
    image,
    setImage,
    loading,
    categoriesArray,
    setCategoriesArray,
    setLoading,
  };
};
