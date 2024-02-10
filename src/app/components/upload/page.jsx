"use client";
import React, { useEffect, useState } from "react";
import { storage } from "../firebase/firebase";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import Link from "next/link";
import "./upload.css";

const Upload = () => {
  const [imageUpload, setImageUpload] = useState(null);
  const [imageData, setImageData] = useState([]);
  const [uploading, setUploading] = useState(false);

  const imageListRef = ref(storage, "images/");

  const uploadImage = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name}`);
    setUploading(true);
    uploadBytes(imageRef, imageUpload)
      .then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          setImageData((prev) => [
            ...prev,
            { name: getImageName(imageUpload.name), url },
          ]);
        });
        setUploading(false);
      })
      .catch((error) => {
        console.error("Error uploading image:", error);
        setUploading(false);
      });
  };

  const getImageName = (fullName) => {
    return fullName.split(".")[0];
  };

  return (
    <div className="App flex flex-col items-center justify-center min-h-screen bg-[#3B82F6]">
      <div className="file-input-container">
        <label htmlFor="myFileInput" className="file-label">
          Upload a meme
        </label>
        <input
          type="file"
          id="myFileInput"
          accept="image/*"
          onChange={(event) => setImageUpload(event.target.files[0])}
          className="file-input"
        />
      </div>

      <button
        onClick={uploadImage}
        disabled={uploading}
        className={`px-4 py-2 bg-[#1d4ed8] text-white rounded-md mt-10 ${
          uploading ? "opacity-50 cursor-not-allowed" : ""
        } hover:bg-blue-600 transition duration-300`}
      >
        {uploading ? "Uploading..." : "Upload meme"}
      </button>

      <div className="flex ">
        <Link href="/">
          <button className="px-4 py-2 m-5 mt-4 bg-[#1d4ed8] text-white rounded-md hover:bg-blue-600 transition duration-300">
            Home
          </button>
        </Link>
        <Link href="/components/meme">
          <button className="px-4 py-2 mt-4 bg-[#1d4ed8] text-white rounded-md hover:bg-blue-600 transition duration-300">
            Meme
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Upload;
