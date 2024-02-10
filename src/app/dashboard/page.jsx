import React from "react";

export default function page() {
  return (
    <div className="w-full bg-white flex ">
      <div className="w-[25%] text-center flex flex-col space-y-80 h-[100vh] text-black">
        <div>
          <input
            type="search"
            name="search"
            id="search"
            placeholder="search"
            className="rounded-lg border-2 w-[80%] h-10 mt-10 mb-5 text-center"
          />{" "}
          <br />
          <div className="font-bold text-left">
            <span>Home</span>
          </div>
          <div className="font-bold text-left">
            <span>Courses</span>
          </div>
          <div className="font-bold text-left">
            <span>Class</span>
          </div>
          <div className="font-bold text-left">
            <span>Projects</span>
          </div>
        </div>
        <div>
        <div className="font-bold text-left">
            <span>Support</span>
          </div>
          <div className="font-bold text-left">
            <span>Settings</span>
          </div>
        </div>
      </div>
      <div className="w-[75%] bg-black">jke</div>
    </div>
  );
}
