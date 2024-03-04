import axios from "axios";
import React, { useEffect, useState } from "react";
import Spinner from "../components/Spinner";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const useGif = (tag) => {
  const [loading, setLoading] = useState(false);
  const [gif, setGif] = useState("");

  async function fetchData(tag) {
    setLoading(true);
    const { data } = await axios.get(tag ?`${url}&tag=${tag}` : url);
    const imageSource = data.data.images.downsized_large.url;
    setGif(imageSource);
    setLoading(false);
  }
  useEffect(() => {
    fetchData();
  }, []);

  return { gif, loading, fetchData };
};

export default useGif;
