import { ThumbUpIcon } from "@heroicons/react/outline";
import Image from 'next/image';
import React from 'react';

const Thumbnail = ({data}) => {
  
  const BASE_URL = "https://image.tmdb.org/t/p/original/";

  return <div className="p-2 cursor-pointer transition duration-200 ease-in transform hover:scale-105 hover:z-50">
 <Image 
    layout="responsive"
    src={`${BASE_URL}${data.backdrop_path || data.poster_path}` || `${BASE_URL}${data.poster_path}`}
    width={1920}
    height={1080}
    alt='thumbnail'   
  />
  <div className="p-2 cursor-pointer">
    <p className="truncate max-w-md">{data.overview}</p>

    <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out hover:font-bold">{data.title || data.original_name}</h2>

    <p className="flex items-center opacity-0 hover:opacity-100">
      {data.media_type && `${data.media_type} . `}{""}
      {data.release_data || data.first_air_date} . {""}
      <ThumbUpIcon className="h-5 mx-2" />{data.vote_count}
    </p>
  </div>
  </div>;
};

export default Thumbnail;
