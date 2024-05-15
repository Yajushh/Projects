import React, { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

export default function CreatePost() {
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const { user } = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const post = {
      title,
      content,
      username: user.username,
      userId: user._id,
      categories: categories,
    };
    try {
      const response = await axios.post("http://localhost:3000/post/", post, {
        withCredentials: true,
      });
      console.log(response.data);
      setTitle("");
      setContent("");
      setError(false);
      navigate("/blogs");
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  const addCategory = (event) => {
    event.preventDefault();
    let categoryBucket = [...categories];
    categoryBucket.push(category);
    setCategories(categoryBucket);
    setCategory("");
    console.log(categories);
  };

  const deleteCategory = (i) => {
    let categoryBucket = [...categories];
    categoryBucket.splice(i);
    setCategories(categoryBucket);
  };

  return (
    <div className="">
      <Navbar />
      <div className="px-24 py-10 w-full h-full flex justify-center items-center ">
        <div className="border border-black rounded-md w-2/3 h-screen bg-slate-100 p-10">
          <form>
            <div className="border border-black rounded-md bg-slate-200 h-14 flex flex-row gap-14 justify-center items-center mb-7">
              <input
                type="text"
                value={title}
                placeholder="TITLE"
                className="border rounded-md w-full mr-3 h-10 p-3 bg-slate-200"
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </div>
            <div className=" w-20 text-bold uppercase">Categories</div>
            <div className="border border-black rounded-md bg-slate-400 h-7 flex flex-row  mb-10 w-1/3">
              <button
                className=" bg-red-800 w-28 text-white uppercase"
                onClick={addCategory}
              >
                Add
              </button>
              <input
                type="text"
                placeholder="Enter categories for your post"
                value={category} // Ensure value is bound to the category state
                className="border rounded-md w-full bg-white text-black"
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
              />
            </div>
            <div className="flex px-4 mt-3">
              {categories?.map((c, i) => (
                <div
                  key={i}
                  className="flex justify-center items-center space-x-2 mr-4 bg-gray-200 px-2 py-1 rounded-md"
                >
                  <p>{c}</p>
                  <p
                    onClick={() => deleteCategory(i)}
                    className="text-white bg-black rounded-full cursor-pointer p-1 text-sm"
                  >
                    X
                  </p>
                </div>
              ))}
            </div>

            <div className="border border-black rounded-md bg-slate-200 h-96 flex flex-start ">
              <input
                type="text"
                value={content}
                placeholder="Write a post..."
                className="border rounded-md p-3 bg-slate-200 h-full w-full flex text-wrap"
                onChange={(e) => {
                  setContent(e.target.value);
                }}
              />
            </div>

            <div className="w-full flex justify-center items-center mt-5">
              <button
                type="button"
                className="justify-center items-center text-white w-1/2 bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-xl px-5 py-2.5 text-center  inline-flex  dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2"
                onClick={handleSubmit}
              >
                Submit
              </button>
              {error && (
                <h3 className="mt-2 text-red-800 font-medium text-center">
                  Something went wrong !
                </h3>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
