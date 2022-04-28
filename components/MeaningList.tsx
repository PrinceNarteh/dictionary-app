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
          Hippopotamus
        </h1>
        <div className="text-xl text-blueGreen mt-2 font-medium">
          <span>United Kingdom</span> | <span>\buk\</span>
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
