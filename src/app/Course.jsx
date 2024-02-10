import React from "react";
import Image from "next/image";
// import course from "../assets/code.jpg"
// import paste from "../assets/paste.jpg"

export default function Course(props) {
  return (
    <div>
      <Image src={props.image} width={props.width} height={props.height} />
      <div className="position: relative flex px-8 space-x-36 py-4 inset-0 mt-[-90px] h-24 backdrop-blur-md">
        <div>
          <div>
            <h3 className="text-white font-bold">{props.tutor}</h3>
          </div>
          <div>
            <p className="text-white">Tutor</p>
          </div>
        </div>
        <div>
          <h2 className="text-purple-700 font-bold">3 weeks</h2>
        </div>
      </div>
    </div>
  );
}
