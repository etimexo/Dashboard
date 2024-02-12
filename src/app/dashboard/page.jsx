import React from "react";
import Course from "../Course";
import code from "../../assets/code.jpg"
import paste from "../../assets/paste.jpg"

export default function page() {
  return (
    <div className="w-full bg-white flex ">
      <div className="w-[25%] position: fixed border-2 text-center flex flex-col space-y-80 h-[100vh] text-black">
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
      <div className="w-[75%] p-4 text-black">
        <p className="text-lg font-bold">Welcome Olivia</p>
        <p className="text-md text-slate-600">
          View a list of all available courses on the platform
        </p>
        <div className="flex align-center justify-between">
          <div className="border-2 rounded-md p-2 border-slate-400 mt-12">
            <button className="pr-4 border-2 border-right-slate-400 h-full">View all</button>
            <button className="pr-4">Free</button>
            <button>Paid</button>
          </div>
          <div className="mt-12">
            <input
              className="border-2 border-slate-400 rounded-md pl-2"
              type="search"
              name="search"
              id="search"
            />
            <button className="p-2 border-1 border-slate-400">Filters</button>
          </div>
        </div>
        <div className="courses ml-80 mt-12">
          <div className="flex space-x-8">
            <Course
              image={code}
              width="400"
              height="400"
              tutor="Oketola Samuel"
              course="Web Development"
              content="ive into the world of coding and design as we explore the fundamentals of web development. From HTML to CSS, JavaScript, and beyond, this course offers a hands-on journey to master the skills needed to build responsive and dynamic websites."
            />
            <Course
              image={paste}
              width="400"
              height="350"
              tutor="Isaac Folarin"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
