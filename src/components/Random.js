import axios from "axios";
import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";


const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Random = () => {
  // const [gif, setGif] = useState("");
  // const [loading, setLoading] = useState(false);

  // async function fetchData() {
  //   setLoading(true);
  //   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
  //   const { data } = await axios.get(url);
  //   const imageSource = data.data.images.downsized_large.url;
  //   setGif(imageSource);
  //   setLoading(false);
  // }
  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const clickHandler = () => {
  //   fetchData();
  // };

  const { gif, loading, fetchData } = useGif();

  return (
    <div className=" w-[175%]  bg-green-400 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">
      <h1 className="text-2xl underline uppercase font-bold mt[15px]">
        a Random Gif
      </h1>
      {!loading ? <img src={gif} width="450" /> : <Spinner />}

      <button
        onClick={() => {
          fetchData();
        }}
        className="w-10/12 bg-white/60 text-lg py-2 rounded-lg mb-[20px]"
      >
        Generate
      </button>
    </div>
  );
};

export default Random;
