import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { useState } from "react";
import { addPost } from "@/app/api/route";

export const CrudInput = ({ key, posts, setPosts }) => {
  const [data, setData] = useState({
    title: "",
    body: "",
  });

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const addPostData = async () => {
    try {
      const response = await addPost(data);
      console.log("Post added successfully:", response);
      if (response.status === 201) {
        // Update the posts state to include the new post
        setPosts((posts) => [...posts, response.data]);
      }
    } catch (error) {
      console.error("Error adding post:", error);
      // Handle error appropriately, e.g., show a notification or alert
      alert("Failed to add post. Please try again.");
    }
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Here you would typically send the data to your API
    addPostData(data);
    console.log("Form submitted with data:", data);

    // Reset the form fields after submission
    setData({ title: "", body: "" });
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <div className="flex justify-around gap-2.5">
          <Input
            key={key}
            className="bg-green-50"
            type="text"
            placeholder="Enter title"
            name="title"
            value={data.title}
            onChange={handleInputChange}
          />
          <Input
            key={key}
            className="bg-green-50"
            type="text"
            placeholder="Enter content"
            name="body"
            value={data.body}
            onChange={handleInputChange}
          />
          <Button
            onClick={handleFormSubmit}
            className="bg-amber-500 text-white hover:bg-amber-600"
          >
            Add
          </Button>
        </div>
      </form>
    </>
  );
};
