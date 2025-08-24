import axios from "axios";
const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});
//get method
export const getPost = async (request) => {
  return api.get("/posts");
};

// delete method
export const deletePost = async (id) => {
  return api.delete(`/posts/${id}`);
};

export const createPost = async (post) => {
  return api.post("/posts", post);
};
