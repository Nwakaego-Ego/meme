import React from "react";
import "./meme.css";

const memes = () => {
  return (
    <div className="bg-blue-500 min-h-screen text-white p-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-10 mt-10 flex justify-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-blue-700 text-white px-4 py-2 rounded-l focus:outline-none"
          />
          <button className="bg-blue-700 px-4 py-2 rounded-r">Search</button>
        </div>

        <div className="grid-container">
          {Array.from({ length: 20 }, (_, index) => (
            <div key={index} className="grid-item">
              {index + 1}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default memes;
