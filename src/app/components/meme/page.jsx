"use client";
import React, { useState } from "react";
import "./meme.css";

const memes = () => {
  const [searchMeme, setSearchMeme] = useState("");

  const memesData = [
    { image: "/catchup.png", category: "football" },
    { image: "/emoji.webp", category: "score" },
    { image: "/football.jpg", category: "cooking" },
    { image: "/guy.png", category: "win" },
    { image: "/catchup.png", category: "clean_sheet" },
    { image: "/emoji.webp", category: "goal" },
    { image: "/football.jpg", category: "offside" },
    { image: "/guy.png", category: "missed" },
    { image: "/catchup.png", category: "kill" },
    { image: "/emoji.webp", category: "toast" },
    { image: "/football.jpg", category: "tears" },
    { image: "/guy.png", category: "back_your_bag" },
    { image: "/catchup.png", category: " penalty" },
    { image: "/emoji.webp", category: "shot" },
    { image: "/football.jpg", category: "plaster" },
    { image: "/guy.png", category: "no_gree_gor_anybody" },
    { image: "/catchup.png", category: "VAR" },
    { image: "/emoji.webp", category: "cup" },
    { image: "/football.jpg", category: "banter" },
    { image: "/guy.png", category: "cook" },
  ];

  const filteredMeme = memesData.filter((meme) => {
    return meme.category.toLowerCase().includes(searchMeme.toLowerCase());
  });

  console.log(filteredMeme);

  return (
    <div className="bg-blue-500 min-h-screen text-white p-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-10 mt-10 flex justify-center">
          <input
            type="text"
            placeholder="search meme..."
            className="bg-blue-700 text-white px-4 py-2 rounded-l focus:outline-none"
            onChange={(e) => setSearchMeme(e.target.value)}
          />
          {/* <button className="bg-blue-700 px-4 py-2 rounded-r">Search</button> */}
        </div>

        <div className="grid-container">
          {filteredMeme.length > 0 ? (
            filteredMeme.map((meme, index) => (
              <div key={index} className="grid-item">
                <img src={meme.image} alt={`meme ${index + 1}`} />
                {meme.category}
              </div>
            ))
          ) : (
            <div className="error-message flex flex-col items-center justify-center text-center text-4xl font-bold text-red-500 p-8 bg-gray-200 rounded-md shadow-md ml-[350px]">
              <span className="mb-4">Oops! No meme found</span>
              <div className="w-16 h-1 bg-red-500 rounded-full"></div>
              <span className="mt-4 text-sm text-gray-600">
                Please try again later
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default memes;

{
  /* {Array.from({ length: 20 }, (_, index) => (       ))}
          <div key={index} className="grid-item">
            {memes[index] && (
              <>
                <img src={memes[index].image} alt={`Meme ${index + 1}`} />
                {memes[index].category}
              </>
            )}
          </div> */
}
{
  /* {filteredMeme.map((meme, index) => {
            return (
              <div key={index} className="grid-item">
                <img src={meme.image} alt={`meme ${index + 1}`} />
                {meme.category}
              </div>
            );
          })} */
}
