import React from "react";
import {IMeaning} from "../types/meanings";

const Meaning = ({
  meaning: {item, key},
}: {
  meaning: {item: IMeaning; key: number};
}) => {
  console.log(key);
  return (
    <div className={`mb-2 p-3 ${key % 2 === 0 ? "bg-slate-100" : ""}`}>
      {item.meanings.map((meaning) => (
        <div>
          {/* Part of Speech */}
          <p className="text-3xl italic">{meaning.partOfSpeech}</p>

          {/* Definitions */}
          <div className="pl-10">
            <ol className="list-decimal space-y-2">
              {meaning.definitions.map((definition) => (
                <>
                  <li>{definition.definition}</li>
                  {definition?.example && (
                    <p className="text-base text-gray-800 italic">
                      Example: {definition.example}
                    </p>
                  )}
                </>
              ))}
            </ol>
          </div>

          {/* Synonyms  */}

          {meaning.synonyms.length > 0 && (
            <>
              <h3 className="my-1 italic">Synonyms</h3>
              <div className="pl-10 space-x-2 flex flex-wrap">
                {meaning.synonyms.map((synonym) => (
                  <span className="bg-blueGreen px-2.5 py-0.5 tracking-wider rounded-full text-white text-sm mb-2 font-semibold cursor-pointer">
                    {synonym}
                  </span>
                ))}
              </div>
            </>
          )}

          {/* Antonyms  */}
          {meaning.antonyms.length > 0 && (
            <>
              <h3 className="my-1 italic">Antonyms</h3>
              <div className="pl-10 space-x-2 flex flex-wrap">
                {meaning.antonyms.map((antonym) => (
                  <span className="bg-blueGreen px-2.5 py-0.5 tracking-wider rounded-full text-white text-sm mb-2 font-semibold cursor-pointer">
                    {antonym}
                  </span>
                ))}
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Meaning;