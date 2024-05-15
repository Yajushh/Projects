import { React, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import HomePosts from "../components/HomePosts";
import Loading from "../components/Loading";

export default function Blog() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [noPosts, setNoPosts] = useState(false);

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:3000/post/bulk");
      setPosts(response.data);
      if (response.data.length === 0) {
        setNoPosts(true);
      } else {
        setNoPosts(false);
      }
      setLoading(false);
    } catch (error) {
      console.log(err);
      setLoading(true);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="px-8 md:px-[200px] min-h-[80vh]">
        {loading ? (
          <div className="h-[40vh] flex justify-center items-center">
            <Loading />
          </div>
        ) : !noPosts ? (
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
