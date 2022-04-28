import React, {useEffect, useState} from "react";
import {IMeaning} from "../types/meanings";
import Meaning from "./Meaning";

const MeaningList = () => {
  const [word, setWord] = useState<IMeaning[]>(null);

  useEffect(() => {
    const fetchWord = async () => {
      const res = await fetch(
        "https://api.dictionaryapi.dev/api/v2/entries/en/book"
      );
      const data = await res.json();
      setWord(data);
    };
    fetchWord();
  }, []);

  console.log(word);

  return (
    <div className="max-w-5xl mx-auto">
      <div>
        <h1 className="text-4xl mt-5 font-semibold text-gray-600">
          {word[0].word}{" "}
          <small className="text-blueGreen text-2xl">{word[0].phonetic}</small>
        </h1>
        <div className="text-xl text-blueGreen mt-2 font-medium flex items-center justify-center gap-2">
          <span className="inline-flex items-center gap-2 ">
            America
            <audio src={`${word[0].phonetics[1].audio}`}></audio>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 cursor-pointer"
              viewBox="0 0 20 20"
              fill="currentColor">
              <path
                fillRule="evenodd"
                d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z"
                clipRule="evenodd"
              />
            </svg>
          </span>
          |
          <span className="inline-flex items-center gap-2 ">
            United Kingdom
            <audio src={`${word[0].phonetics[0].audio}`}></audio>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor">
              <path
                fillRule="evenodd"
                d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </div>
      </div>

      <h2 className="text-left text-2xl font-semibold text-gray-600">
        Definition of Book
      </h2>

      <div className="mt-3 text-left text-lg ">
        {word?.map((item, idx) => (
          <Meaning key={idx} meaning={{item, key: idx}} />
        ))}
      </div>
    </div>
  );
};

export default MeaningList;
