import React, { useEffect, useState } from "react";
import axiosInstance from "@/lib/axiosInstance";

const QuoteHandler = () => {
  const [quote, setQuote] = useState({});
  const getQuote = async () => {
    await axiosInstance
      .get("/api/v1/quote/random")
      .then((res) => {
        setQuote(res.data.data);
      })
      .catch((err) => {});
  };

  useEffect(() => {
    getQuote();
  }, []);
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="uppercase text-white text-sm font-semibold">
        {quote?.quote}
      </p>
      <p className="text-white">—{quote?.author}</p>
    </div>
  );
};

export default QuoteHandler;
