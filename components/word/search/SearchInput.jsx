import React from "react";

const SearchInput = ({ handleSearchWord, setSearchText, searchText }) => {
  const changeSearchInput = (e) => {
    setSearchText(e.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearchWord(searchText);
    }
  };
  return (
    <input
      className="border-white text-primary font-bold border-none outline-none p-2 rounded-sm"
      type="text"
      onChange={changeSearchInput}
      onKeyDown={handleKeyDown}
      value={searchText}
    />
  );
};

export default SearchInput;
