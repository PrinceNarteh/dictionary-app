import React, {FormEvent, useState} from "react";

const SearchBar = () => {
  const [searchWord, setSearchWord] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(searchWord);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="max-w-sm mx-auto border mt-10 border-blue-400 px-2 py-1 rounded-full flex">
        <input
          className="w-full outline-none px-2 text-gray-700"
          type="search"
          name="search"
          onChange={(e) => setSearchWord(e.target.value)}
        />
        <button
          className="bg-blue-700 text-offWhite font-bold py-1 px-4 rounded-full"
          type="submit">
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
