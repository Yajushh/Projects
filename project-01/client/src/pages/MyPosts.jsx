import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import Navbar from "../components/Navbar";
import Loading from "../components/Loading";
import HomePosts from "../components/HomePosts";

export default function MyPosts() {
  const { search } = useLocation();
  const [posts, setPosts] = useState([]);
  const { user } = useContext(UserContext);
  const [invalid, setInvalid] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "http://localhost:3000/post/user/" + user._id
      );
      setPosts(response.data);
      if (response.data.length === 0) {
        setInvalid(true);
      } else {
        setInvalid(false);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(true);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <div>
      <Navbar />
      <div>
        {loading ? (
          <div className="h-[40vh] flex justify-center items-center">
            <Loading />
          </div>
        ) : !invalid ? (
          posts.map((post) => (
            <>
              <HomePosts key={post._id} post={post} />
            </>
          ))
        ) : (
          <h3 className="text-center font-bold mt-16">No posts available</h3>
        )}
      </div>
    </div>
  );
}
