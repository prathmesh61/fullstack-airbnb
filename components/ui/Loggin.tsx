"use client";
import React from "react";
import { Button } from "../ui/button";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Loggin() {
  const { status } = useSession();

  return (
    <div className="flex items-center ">
      {status === "authenticated" ? (
        <Button
          variant="outline"
          className="px-4 py-0 h-fit"
          onClick={() => signOut()}
        >
          SignOut
        </Button>
      ) : (
        <Button
          variant="outline"
          className="px-4 py-0 h-fit"
          onClick={() => signIn("google")}
        >
          signIn
        </Button>
      )}
    </div>
  );
}
