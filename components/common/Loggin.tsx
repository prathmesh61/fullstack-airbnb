"use client";
import React from "react";
import { Button } from "../ui/button";
import { signIn, signOut, useSession } from "next-auth/react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { User } from "lucide-react";
import Link from "next/link";

export default function Loggin() {
  const { status } = useSession();

  return (
    <div className="flex items-center ">
      <Popover>
        <PopoverTrigger>
          <User size={30} className="bg-brand p-2 rounded-full text-white" />
        </PopoverTrigger>
        <PopoverContent className="mr-5 mt-6 md:mt-3 flex flex-col items-start gap-4">
          {status === "authenticated" ? (
            <h3 className="text-md cursor-pointer" onClick={() => signOut()}>
              Logout
            </h3>
          ) : (
            <h3
              className="text-md cursor-pointer"
              onClick={() => signIn("google")}
            >
              signIn
            </h3>
          )}
          <Link href={"/add-home"}>Airbnb your home</Link>
        </PopoverContent>
      </Popover>
    </div>
  );
}
