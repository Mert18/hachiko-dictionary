"use client";
import React, { useState, useEffect } from "react";
import axiosInstance from "@/lib/axiosInstance";
import Word from "@/components/Word";
import WordBoxList from "@/components/WordBoxList";

const Dashboard = () => {
  const [currentWord, setCurrentWord] = useState({});
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const [words, setWords] = useState([]);

  useEffect(() => {
    axiosInstance
      .get(`/api/v1/word/all?page=${currentPage}&size=20`)
      .then((res) => {
        setTotalPage(res.data.data.totalPages);
        setWords(res.data.data.content);
        handleCurrentWord(res.data.data.content[0]);
      });
  }, [currentPage]);

  const handleCurrentWord = (word) => {
    setCurrentWord(word);
  };

  const handleIncreasePageCount = () => {
    if (currentPage < totalPage) setCurrentPage(currentPage + 1);
  };

  const handleDecreasePageCount = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };
  return (
    <>
      <div className="md:flex-1 bg-white flex justify-center items-start pt-20">
        <Word word={currentWord} />
      </div>
      <div className="md:flex-1 bg-primary flex justify-center items-center">
        <WordBoxList words={words} handleCurrentWord={handleCurrentWord} />
        <div className="flex flex-col justify-center">
          <button
            className="w-5 h-5 rounded-full bg-white my-1"
            onClick={handleDecreasePageCount}
          ></button>
          <button
            className="w-5 h-5 rounded-full bg-white my-1"
            onClick={handleIncreasePageCount}
          ></button>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
