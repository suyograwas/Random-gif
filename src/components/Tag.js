import axios from "axios";
import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Tag = () => {
  // const [gif, setGif] = useState("");
  const [tag, setTag] = useState("");
  // const [loading, setLoading] = useState(false);

  // async function fetchData() {
  //   setLoading(true);
  //   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
  //   const { data } = await axios.get(url);
  //   const imageSource = data.data.images.downsized_large.url;
  //   setGif(imageSource);
  //   setLoading(false);
  // }
  // useEffect(() => {
  //   fetchData();
  // }, []);

  const { gif, loading, fetchData } = useGif(tag);

  return (
    <div className=" w-[175%]  bg-blue-400 rounded-lg border border-black flex flex-col items-center gap-y-4 mt-[15px]">
      <h1 className="text-2xl underline uppercase font-bold mt[15px]">
        Random Gif
      </h1>
      {!loading ? <img src={gif} width="450" /> : <Spinner />}
      <input
        type="text"
        onChange={(event) => setTag(event.target.value)}
        className=" w-10/12 text-lg py-2 rounded-lg text-center"
        value={tag}
      />

      <button
        onClick={() => {
          fetchData(tag);
        }}
        className="w-10/12 bg-white/60 text-lg py-2 rounded-lg mb-[20px]"
      >
        Generate
      </button>
    </div>
  );
};

export default Tag;
