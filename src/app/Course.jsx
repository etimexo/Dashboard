import React from "react";
import Image from "next/image";

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
      <h2>{props.course}</h2><br />
        <p className="border-2 w-64 border-red-500">{props.content}</p>
    </div>
  );
}
