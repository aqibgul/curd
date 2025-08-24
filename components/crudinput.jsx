"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { useState } from "react";

export const CrudInput = () => {
  const [data, setData] = useState({
    title: "",
    content: "",
  });

  return (
    <>
      <div className="flex justify-around gap-2.5">
        <Input className="bg-green-50" type="text" placeholder="Enter title" />
        <Input
          className="bg-green-50"
          type="text"
          placeholder="Enter content"
        />
        <Button className="bg-amber-500 text-white hover:bg-amber-600">
          Add
        </Button>
      </div>
    </>
  );
};
