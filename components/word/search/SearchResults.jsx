import React from "react";
import Link from "next/link";

const SearchResults = ({ searchResults, resetSearchComponent }) => {

  return (
    <ul className="flex flex-col-reverse">
      {searchResults.slice(0, 3).map((result) => (
        <li
          className="mb-2 rounded-sm text-primary w-full hover:bg-white-100 cursor-pointer rounded-sm"
          key={result.id}
        >
          <Link
            className="block p-2 bg-white"
            href={`/main/words/${result.id}`}
            onClick={resetSearchComponent}
          >
            {result.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SearchResults;
