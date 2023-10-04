"use client";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Link from "next/link";
import Image from "next/image";
import { LogIn, User } from "lucide-react";

export default function Loggin() {
  const { data: session, status } = useSession();

  return (
    <div className="flex items-center ">
      <Popover>
        <PopoverTrigger>
          {status === "authenticated" ? (
            <User
              size={25}
              className="bg-zinc-300 cursor-pointer p-1 rounded-full"
            />
          ) : (
            <LogIn
              size={25}
              className="bg-zinc-300 cursor-pointer p-1 rounded-full"
            />
          )}
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
              signin
            </h3>
          )}
          <Link href={"/add-home"}>Airbnb your home</Link>
        </PopoverContent>
      </Popover>
    </div>
  );
}
