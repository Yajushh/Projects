import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { UserContext } from "../context/UserContext";
import axios from "axios";

export default function Navbar() {
  const navigate = useNavigate();
  const [menu, setMenu] = useState(false);
  const { user } = useContext(UserContext);

  const toggleMenu = () => {
    setMenu(!menu);
  };
  const logoutHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get("http://localhost:3000/auth/logout");
      console.log(response);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="border-b flex justify-center items-center h-20 bg-slate-100">
      <div className="flex justify-between w-full px-4 md:px-10">
        <Link to="/" className="flex text-2xl font-bold">
          S U D O B L O G
        </Link>

        <div className="flex flex-row justify-center items-center mr-5 gap-5">
          <Link
            className="flex justify-center items-center hover:underline gap-1"
            to="/blogs"
          >
            <MenuBookIcon />
            <span className="text-xl">Read</span>
          </Link>
          <Link
            className="flex justify-center items-center hover:underline gap-1 "
            to="/create"
          >
            <AddIcon />
            <span className="text-xl">Write</span>
          </Link>
          {user ? (
            <button
              className="bg-black text-white text-md px-4 py-1 border border-black rounded-full
            hover:bg-gray-800 ml-2
            "
              onClick={logoutHandler}
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="bg-black text-white text-md px-4 py-1 border border-black rounded-full
            hover:bg-gray-800 ml-2
            "
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
