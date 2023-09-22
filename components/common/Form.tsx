"use client";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import CategoryForm from "./CategoryForm";
import { useAddNewHome } from "@/hooks/useAddNewHome";

export function Form() {
  const {
    handleSubmit,
    onSubmit,
    categoriesArray,
    errors,
    loading,
    register,
    setCategoriesArray,
    setImage,
  } = useAddNewHome();

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
