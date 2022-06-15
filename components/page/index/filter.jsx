import React from "react";

const Filter = ({
  tabTitles,
  activeTab,
  setActiveTab,
  searchHandler,
  query,
}) => {
  return (
    <div className="p-4 sticky top-28 right-0 bg-gray-800 z-10">
      <div className="flex items-center justify-between bg-gray-900 rounded-xl p-4">
        <div className={`bg-gray-800 rounded-lg w-1/4`}>
          <input
            value={query}
            placeholder={"Search Movie"}
            className="`w-full p-3 bg-transparent text-white`"
            type="text"
            onChange={(e) => searchHandler(e.target.value)}
          />
        </div>
        <div>
          {tabTitles?.map((title, index) => {
            const style =
              title === activeTab
                ? "bg-green-600"
                : "bg-gray-900 hover:bg-black";
            return (
              <span
                key={index}
                className={`${style} cursor-pointer  text-white py-2.5  w-24 inline-block text-center mx-2 rounded-xl `}
                onClick={() => setActiveTab(title)}
              >
                {title}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Filter;
