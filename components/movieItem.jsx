import React from "react";
import Image from "next/image";

const imagePath = "https://image.tmdb.org/t/p/w500";

const MovieItem = ({ data }) => {
  const src = imagePath + data?.poster_path;
  return (
    <div className="bg-gray-900/60 p-4 rounded-xl ">
      <div className="w-full rounded-t-xl overflow-hidden">
        <Image
          loader={() => src}
          src={src}
          width={"100%"}
          height={"100%"}
          layout={"responsive"}
        />
      </div>
      <div className={`mt-4  `}>
        <div className="whitespace-nowrap text-ellipsis overflow-hidden text-lg text-white">
          {data?.title ?? data.name}
        </div>
        <div className="flex items-center justify-between">
          <div className="text-sm text-white/30 py-2">
            Rate:{" "}
            <span className="text-green-500 font-bold p-2">
              {data?.vote_average}
            </span>
          </div>
          <div className="text-sm text-white/30">
            {data?.release_date ?? data?.first_air_date}
          </div>
        </div>
      </div>
    </div>
  );
};
export default MovieItem;
