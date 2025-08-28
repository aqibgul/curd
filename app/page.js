"use client";
import Image from "next/image";
import React from "react";

import { PostCard } from "@/components/postcard";
import { CrudInput } from "@/components/crudinput";
import { getPost } from "@/app/api/route";
import { useEffect } from "react";
import { useState } from "react";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [updatePost, setUpdatePost] = useState({});

  const getPostData = async () => {
    try {
      const response = await getPost();
      //console.log(response);
      console.log("Posts fetched successfully:", response.data);
      setPosts(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching posts:", error);

      setLoading(false);
      // Handle error appropriately, e.g., show a notification or alert
      alert("Failed to fetch posts Due to network problem please try again.");
    }
  };
  useEffect(() => {
    getPostData();
  }, []);

  return (
    <>
      <div className="  container mx-auto  bg-amber-200 pt-5  ">
        <div className=" flex flex-col items-center gap-3.5    w-full ">
          <div className="flex justify-center items-center  ">
            <h1 className=" font-mono text-4xl p-2 text-center ">
              Welcome to My CRUD App
            </h1>
          </div>
          <CrudInput
            posts={posts}
            setPosts={setPosts}
            loading={loading}
            setLoading={setLoading}
          />

          <PostCard
            key={posts.id}
            posts={posts}
            setPosts={setPosts}
            loading={loading}
            setLoading={setLoading}
          />
        </div>
      </div>
    </>
  );
}
