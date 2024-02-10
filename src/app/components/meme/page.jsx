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
    <div className="bg-red-500 min-h-screen text-white p-4">
      <div className=" max-w-5xl mx-auto">
        <div className="mb-10 mt-10 flex flex-col sm:flex-row justify-center">
          <input
            type="text"
            placeholder="Search meme..."
            className="bg-blue-700 text-white px-4 py-2 w-64 rounded-l mb-2 sm:mb-0 sm:mr-2 focus:outline-none"
            onChange={(e) => setSearchMeme(e.target.value)}
          />
          <Link href="/">
            <button className="bg-blue-700 px-4 py-2 rounded mb-2 sm:mb-0 sm:mr-2">
              Home
            </button>
          </Link>
          <Link href="/components/upload">
            <button className="bg-blue-700 px-4 py-2 rounded">Upload</button>
          </Link>
        </div>

        <div className="grid-container">
          {filteredMeme.length > 0 ? (
            filteredMeme.map((meme, index) => (
              <div key={index} className="grid-item">
                <img src={meme.url} alt={meme.name} width={350} height={350} />
                <div>{meme.name}</div>
                <div>
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
            <div className="error-message flex flex-col items-center justify-center text-center text-4xl font-bold text-red-500 p-8 bg-gray-200 rounded-md shadow-md">
              <span className="mb-4">Loading</span>
              <div className="w-16 h-1 bg-red-500 rounded-full"></div>
              <span className="mt-4 text-sm text-gray-600">
                In a few seconds...
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Memes;
