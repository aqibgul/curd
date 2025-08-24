"use client";
import Image from "next/image";
import React from "react";

import { PostCard } from "@/components/postcard";
import { CrudInput } from "@/components/crudinput";

export default function Home() {
  return (
    <>
      <div className="  container mx-auto  bg-amber-200 pt-5 ">
        <div className=" flex flex-col items-center gap-3.5    w-full ">
          <div className="flex justify-center items-center  ">
            <h1 className=" text-4xl p-2 ">Welcome to My CRUD App</h1>
          </div>
          <CrudInput />

          <PostCard />
        </div>
      </div>
    </>
  );
}
