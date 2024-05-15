import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Blog from "./pages/Blog";
import Bulk from "./pages/Bulk";
import CreatePost from "./pages/CreatePost";
import Profile from "./pages/Profile";
import { UserContextProvider } from "./context/UserContext";

export default function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bulk" element={<Bulk />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/error" element={<Error />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/register" element={<Register />} />
        <Route path="/create" element={<CreatePost />} />
      </Routes>
    </UserContextProvider>
  );
}
