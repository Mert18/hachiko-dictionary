import React, { useState, useEffect } from "react";
import WordBox from "./WordBox";
import Link from "next/link";
import axiosInstance from "@/lib/axiosInstance";

const WordBoxList = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const [words, setWords] = useState([]);

  useEffect(() => {
    axiosInstance
      .get(`/api/v1/word/all?page=${currentPage}&size=20`)
      .then((res) => {
        setTotalPage(res.data.data.totalPages);
        setWords(res.data.data.content);
      });
  }, [currentPage]);

  const handleIncreasePageCount = () => {
    if (currentPage < totalPage - 1) setCurrentPage(currentPage + 1);
  };

  const handleDecreasePageCount = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };
  return (
    <>
      <ul className="py-5 flex flex-wrap w-full">
        {words?.map((word) => (
          <li
            className="transition hover:cursor-pointer hover:-translate-y-1"
            key={word.title}
          >
            <Link href={`/main/words/${word.id}`}>
              <WordBox title={word.title} />
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex justify-center w-full">
        <button
          className="w-5 h-5 rounded-full bg-white mr-1"
          onClick={handleDecreasePageCount}
        ></button>
        <button
          className="w-5 h-5 rounded-full bg-white"
          onClick={handleIncreasePageCount}
        ></button>
      </div>
    </>
  );
};

export default WordBoxList;
