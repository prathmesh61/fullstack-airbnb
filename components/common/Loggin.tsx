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

export default function Loggin() {
  const { data: session, status } = useSession();

  return (
    <div className="flex items-center ">
      <Popover>
        <PopoverTrigger>
          <Image
            src={session?.user?.image || ""}
            width={30}
            height={30}
            className="rounded-full"
            alt="user"
          />
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
