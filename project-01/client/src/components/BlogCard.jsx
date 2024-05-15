import React from "react";

export default function BlogCard({ post }) {
  return (
    <div className="flex flex-col mt-8 items-center w-full h-full ">
      <div className="border border-gray-700 rounded-md w-[1200px] h-[300px] flex ">
        {/*LEFT CONTAINER*/}
        <div className="w-1/3 h-full justify-start">
          <img src={post.photo} alt="" className="object-fit h-full w-full" />
        </div>
        {/*MIDDLE CONTAINER*/}
        <div className="ml-3 w-2/3 flex flex-col">
          <h1 className="mt-5 ml-4 font-semibold text-gray-700 text-3xl">
            {post.title}
          </h1>
          <div className="mt-2 ml-4 font-semibold text-gray-700">
            @{post.username}
          </div>

          <div className="p-5">
            <div className="text-gray-700 text-left">
              <p className="text-sm md:text-lg">
                {post.content.slice(0, 200) + " ...Read More"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
