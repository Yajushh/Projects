import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import { Button } from "@mui/material";
import Typewriter from "typewriter-effect";
import TypewriterComponent from "typewriter-effect";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import MatrixRainingCode from "../components/Raining";

export default function Home() {
  return (
    <>
      <Navbar />
      {/* BODY */}
      <div className="h-screen bg-black p-10">
        <div className="border border-white rounded-md w-1/2 h-3/4">
          <div className="font-bold text-green-300 text-3xl relative z-10 opacity-100 p-10 flex flex-col gap-20">
            <div className="h-1/2 w-2/3 flex flex-row gap-3 ">
              <ArrowForwardIosIcon className="mt-2" />
              <TypewriterComponent
                options={{
                  strings: [
                    "Welcome to SUDOBLOG, where you can vomit your retarded ideas !",
                  ],
                  autoStart: true,
                  loop: true,
                  cursor: "_",
                  delay: 100,
                  deleteSpeed: 40,
                  devMode: false,
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <MatrixRainingCode className="absolute inset-0" />
    </>
  );
}
