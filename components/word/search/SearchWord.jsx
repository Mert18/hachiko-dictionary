import React, { useState } from "react";
import SearchInput from "./SearchInput";
import SearchResults from "./SearchResults";
import { searchWord } from "@/api/word";

const SearchWord = () => {
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchWord = (searchText) => {
    searchWord(searchText, setSearchResults, setLoading);
  }

  const resetSearchComponent = () => {
    setSearchResults([]);
    setSearchText("");
  }

  return (
    <>
      <SearchResults searchResults={searchResults} resetSearchComponent={resetSearchComponent} />
      <SearchInput handleSearchWord={handleSearchWord} setSearchText={setSearchText} searchText={searchText} />
    </>
  );
};

export default SearchWord;
