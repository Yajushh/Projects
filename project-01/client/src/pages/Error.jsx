import React from "react";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className="flex flex-col">
      <h1 className="flex justify-center text-center w-full border-b text-3xl font-medium text-slate-700">
        E R R O R
      </h1>
      <p className="text-center text-sm text-slate-700 ">
        Welcome, You have reached the error page
      </p>
      <div className="flex flex-col gap-12 justify-center items-center  w-full ">
        <Link to="/login" className="text-blue-400 ">
          Login
        </Link>
        <Link to="/register" className="text-blue-400 ">
          Register
        </Link>
      </div>
    </div>
  );
}
