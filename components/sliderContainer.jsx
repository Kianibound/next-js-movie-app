import React, { useState } from "react";
import Slider from "./slider";

const SliderContainer = ({ data, title }) => {
  const [active, setActive] = useState(data[0].title);

  return (
    <div className="py-12 pl-12 flex flex-wrap items-center justify-between">
      <h2 className="text-white font-bold text-2xl p-4 mr-12">{title}</h2>
      <div className="bg-gray-900 px-1 py-2  mr-12">
        {data?.map((item, index) => {
          const style =
            item.title === active
              ? "bg-green-600"
              : "bg-gray-900 hover:bg-black";
          return (
            <span
              key={index}
              className={`${style} cursor-pointer text-white py-2.5  w-24 inline-block text-center mx-2 rounded-xl `}
              onClick={() => setActive(item.title)}
            >
              {item.title}
            </span>
          );
        })}
      </div>
      <div className="block w-full">
        <Slider data={data.find((item) => item.title === active).value} />
      </div>
    </div>
  );
};

export default SliderContainer;
