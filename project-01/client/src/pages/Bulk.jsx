import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Loading from "../components/Loading";
import BlogCard from "../components/BlogCard";
import { UserContext } from "../context/UserContext";

export default function Bulk() {
  const [posts, setPosts] = useState([]);
  const { user } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [noResponse, setNoResponse] = useState(false);

  const fetchBulk = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:3000/post/bulk");
      setPosts(response.data);
      if (response.data.length === 0) {
        setNoResponse(true);
      } else {
        setNoResponse(false);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(true);
    }
  };

  useEffect(() => {
    fetchBulk();
  }, []);

  return (
    <div>
      <Navbar />
      {loading ? (
        <div>
          <Loading />
        </div>
      ) : !noResponse ? (
        posts.map((post) => (
          <>
            <BlogCard key={post._id} post={post} />
          </>
        ))
      ) : (
        <h3 className="text-center font-bold mt-16">No posts available</h3>
      )}
    </div>
  );
}
