import { z } from "zod";
const MAX_FILE_SIZE = 500000;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];
export const addHomeSchema = z.object({
  title: z.string().min(5, { message: "Title is required" }),
  description: z.string().min(10, { message: "Description is required" }),
  address: z.string().min(10, { message: "address is required" }),
  price: z.string().min(1, { message: "Price is required" }),
  guests: z.string().min(1, { message: "guests is required" }),
  rooms: z.string().min(1, { message: "rooms is required" }),
  country: z.string().min(1, { message: "Country is required" }),
  state: z.string().min(1, { message: "State is required" }),
});

export type HomeTypeSchema = z.infer<typeof addHomeSchema>;
