"use client";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
// import { getPost } from "@/app/api/route";
// import { useEffect } from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Loader2Icon } from "lucide-react";
import { deletePost } from "@/app/api/route";

export const PostCard = ({ posts, setPosts, loading, setLoading }) => {
  const [updatePost, setUpdatePost] = useState({});

  const handleDeleteButtonClick = async (id) => {
    const res = await deletePost(id);
    if (res.status === 200) {
      setPosts(posts.filter((post) => post.id !== parseInt(id)));
    } else {
      alert("Failed to delete post. Please try again.");
    }
    console.log("Delete response:", res);
  };
  const handleEditButtonClick = (post) => {
    setUpdatePost(post);
    console.log("Edit post:", post);
  };

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <Loader2Icon className="animate-spin  text-blue-500 size-16 " />
        </div>
      ) : (
        <div className="  md:grid grid-cols-2 lg:grid-cols-3 p-4 gap-4.5">
          {posts.length > 0 ? (
            posts.map((post, index) => (
              <Card
                key={index}
                className="  lg:w-[330px] w-[300px] mb-5  bg-white shadow-lg"
              >
                <CardHeader>
                  <CardTitle>{index + 1}</CardTitle>
                  <CardDescription>{post.title}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{post.body}</p>
                </CardContent>
                <CardFooter className="gap-2.5">
                  <Button
                    className="bg-green-600 text-amber-50"
                    variant="outline"
                    size="sm"
                    onClick={() => handleEditButtonClick(post)}
                  >
                    Edit
                  </Button>
                  <Button
                    className="bg-red-500 text-amber-50 "
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      if (
                        window.confirm(`Are you sure you want to delete post ?`)
                      ) {
                        handleDeleteButtonClick(post.id);
                      } else {
                        console.log("Deletion cancelled");
                      }
                    }}
                  >
                    Delete
                  </Button>
                </CardFooter>
              </Card>
            ))
          ) : (
            <div className="flex justify-center items-center h-screen">
              <Loader2Icon className="animate-spin  text-blue-500 size-16 " />
            </div>
          )}
        </div>
      )}
    </>
  );
};
