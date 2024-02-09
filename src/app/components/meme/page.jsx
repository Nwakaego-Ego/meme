"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { storage } from "../firebase/firebase";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import "./meme.css";

const Memes = () => {
  const [searchMeme, setSearchMeme] = useState("");
  const [imageData, setImageData] = useState([]);

  const imageListRef = ref(storage, "images/");

  useEffect(() => {
    listAll(imageListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageData((prev) => [
            ...prev,
            { name: getImageName(item.name), url },
          ]);
        });
      });
    });
  }, []);

  const getImageName = (fullName) => {
    return fullName.split(".")[0];
  };

  const handleDownload = (url, name) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredMeme = imageData.filter((meme) => {
    return meme.name.toLowerCase().includes(searchMeme.toLowerCase());
  });

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
          <Link href="/">
            <button className="bg-blue-700 px-4 py-2 rounded ml-[50px]">
              Home
            </button>
          </Link>
          <Link href="/components/upload">
            <button className="bg-blue-700 px-4 py-2 rounded ml-[50px]">
              Upload
            </button>
          </Link>
        </div>

        <div className="grid-container">
          {filteredMeme.length > 0 ? (
            filteredMeme.map((meme, index) => (
              <div key={index} className="grid-item">
                <img src={meme.url} alt={meme.name} width={350} height={350} />
                <div>{meme.name}</div>
                <div>
                  {" "}
                  <button
                    onClick={() => handleDownload(meme.url, meme.name)}
                    className="text-blue-700 font-bold"
                  >
                    Download
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="error-message flex flex-col items-center justify-center text-center text-4xl font-bold text-red-500 p-8 bg-gray-200 rounded-md shadow-md ml-[350px]">
              <span className="mb-4">Loading</span>
              <div className="w-16 h-1 bg-red-500 rounded-full"></div>
              <span className="mt-4 text-sm text-gray-600">
                In few seconds....
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Memes;

// const memesData = [
//   { image: "/catchup.png", category: "football" },
//   { image: "/emoji.webp", category: "score" },
//   { image: "/football.jpg", category: "cooking" },
//   { image: "/guy.png", category: "win" },
//   { image: "/catchup.png", category: "clean_sheet" },
//   { image: "/emoji.webp", category: "goal" },
//   { image: "/football.jpg", category: "offside" },
//   { image: "/guy.png", category: "missed" },
//   { image: "/catchup.png", category: "kill" },
//   { image: "/emoji.webp", category: "toast" },
//   { image: "/football.jpg", category: "tears" },
//   { image: "/guy.png", category: "back_your_bag" },
//   { image: "/catchup.png", category: " penalty" },
//   { image: "/emoji.webp", category: "shot" },
//   { image: "/football.jpg", category: "plaster" },
//   { image: "/guy.png", category: "no_gree_gor_anybody" },
//   { image: "/catchup.png", category: "VAR" },
//   { image: "/emoji.webp", category: "cup" },
//   { image: "/football.jpg", category: "banter" },
//   { image: "/guy.png", category: "cook" },
// ];
